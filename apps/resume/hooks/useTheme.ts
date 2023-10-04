import { useCallback, useEffect, useMemo, useState } from "react";

enum Theme {
  LIGHT = "light",
  DAKR = "dark",
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const isDarkMode = useMemo(() => theme === "dark", [theme]);

  const initTheme = useCallback(() => {
    const preferDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initalTheme =
      (localStorage?.getItem("theme") as Theme) ||
      (preferDarkMode ? Theme.DAKR : Theme.LIGHT);
    setTheme(initalTheme);
  }, []);

  useEffect(() => {
    initTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === Theme.LIGHT ? Theme.DAKR : Theme.LIGHT));
  }, []);

  return { theme, isDarkMode, setTheme, toggleTheme };
};

export default useTheme;
