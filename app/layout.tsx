import StyledComponentsRegistry from "../lib/registry";
import { raleway } from "../ui/font";
import "../ui/global.style.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "4NEX Sample Site",
  description: "AI, Web and Data Science Solutions for you.",
  keywords: [
    "AI",
    "Data Science",
    "Enterprise",
    "Solutions",
    "Service",
    "4NEX",
    "4",
    "NEX",
    "KI",
  ],
  openGraph: {
    type: "website",
    url: "https://romandietenmeiertechnik.de/4nex/",
    title: "4NEX Sample Site",
    description: "AI and Data Science Solutions for the Enterprise, for you.",
    images: [
      {
        url: "https://romandietenmeiertechnik.de/4nex/whiteLogoToUpdate.png",
        width: 853,
        height: 371,
        alt: "4NEX",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={raleway.className}
      style={{ margin: 0, padding: 0 }}
    >
      <head>
        <meta charSet="utf-8" />
        <title>4NEX Sample Site</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: `'Raleway', ${raleway.className},sans-serif`,
        }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
