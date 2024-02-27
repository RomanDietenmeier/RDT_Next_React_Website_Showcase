const FTPClient = require("ftp");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const localDir = "./out";

const client = new FTPClient();

function printErrorIfDefined(error) {
  if (!error) return;
  console.error("FTP Client Error:", error);
}

client.on("ready", () => {
  client.list((err, list) => {
    printErrorIfDefined(err);
    if (!list) return;

    for (const fileOrFolder of list) {
      if (fileOrFolder.name === "..") continue;
      if (fileOrFolder.name === ".") continue;
      if (fileOrFolder.type === "d") {
        client.rmdir(fileOrFolder.name, true, printErrorIfDefined);
      }
      if (fileOrFolder.type === "-") {
        client.delete(fileOrFolder.name, printErrorIfDefined);
      }
    }
  });

  client.end();
});

client.on("error", (error) => {
  console.error("FTP Client Error:", error);
});

client.connect({
  host: process.env.FTP_HOST_NAME,
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  port: process.env.FTP_PORT,
});

function addFilesAndFolders(directoryPath, targetFolder = ".") {
  fs.readdir(directoryPath, (err, list) => {
    printErrorIfDefined(err);

    for (const fileOrFolder of list) {
      const fileOrFolderPath = path.join(directoryPath, fileOrFolder);
      const serverPath = path
        .join(targetFolder, fileOrFolder)
        .replace(/\\/g, "/");
      const stats = fs.statSync(fileOrFolderPath);

      if (stats.isDirectory()) {
        client.mkdir(serverPath, true, printErrorIfDefined);
        addFilesAndFolders(fileOrFolderPath, serverPath);
      } else if (stats.isFile()) {
        const fileStream = fs.createReadStream(fileOrFolderPath);
        client.put(fileStream, serverPath, printErrorIfDefined);
      }
    }
  });
}

client.once("end", () => {
  console.log("Finished deleting, now uploading");
  client.on("ready", () => {
    addFilesAndFolders(localDir);
    client.end();
  });
  client.connect({
    host: process.env.FTP_HOST_NAME,
    user: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    port: process.env.FTP_PORT,
  });
});
