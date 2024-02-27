import GermanyFlag from "openmoji/color/svg/1F1E9-1F1EA.svg";
import AmericaFlag from "openmoji/color/svg/1F1FA-1F1F8.svg";

console.log("GermanyFlag", GermanyFlag.src);

export function getCountryFlag(language: string) {
  switch (language) {
    case "de":
      return GermanyFlag.src;
    default:
      return AmericaFlag.src;
  }
}

export function getNextLanguage(language: string) {
  switch (language) {
    case "de":
      return "en";
    default:
      return "de";
  }
}
