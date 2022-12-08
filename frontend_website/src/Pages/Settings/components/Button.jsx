/* eslint-disable react/no-unescaped-entities */
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { GlobalStyles } from "./Global";
import Toggle from "./toggle";
import { useDarkMode } from "./useDarkmode";


function Button() {
    const [theme, toggleTheme] = useDarkMode("light");


    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
      </ThemeProvider>
    );
  }
  

export default Button
