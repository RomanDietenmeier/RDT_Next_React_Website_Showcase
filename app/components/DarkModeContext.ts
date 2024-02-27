import { createContext } from "react";

const DarkModeContext = createContext<{
  useDarkMode: boolean;
  setUseDarkMode: (useDarkMode: boolean) => void;
}>({
  useDarkMode: false,
  setUseDarkMode: () => {},
});

export default DarkModeContext;
