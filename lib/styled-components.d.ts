import { whiteTheme } from "../ui/theme";

type ThemeInterface = typeof whiteTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
