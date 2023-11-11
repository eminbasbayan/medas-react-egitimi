import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode")
      ? JSON.parse(localStorage.getItem("themeMode"))
      : "Light"
  );
  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
