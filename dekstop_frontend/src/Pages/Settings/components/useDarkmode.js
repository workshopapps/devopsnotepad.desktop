/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";


// eslint-disable-next-line import/prefer-default-export
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = null;  window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
