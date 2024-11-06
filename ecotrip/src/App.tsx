import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { ThemeContext } from "styled-components";
import { themes } from "./models/Theme";
import { useEffect, useReducer } from "react";
import { ThemesReducer } from "./reducers/ThemesReducer";
import { ThemeDispatchContext } from "./contexts/ThemeDispatchContext";

function App() {
  const storedTheme = localStorage.getItem("theme");
  let initialTheme;
  try {
    initialTheme = storedTheme ? JSON.parse(storedTheme) : themes.dark;
  } catch (error) {
    console.error("Error parsing theme from localStorage", error);
    initialTheme = themes.dark;
  }
  const [theme, dispatch] = useReducer(ThemesReducer, initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  
  return (
    <>
      <ThemeDispatchContext.Provider value={dispatch} >
        <ThemeContext.Provider value={theme}>
          <RouterProvider router={router}></RouterProvider>
        </ThemeContext.Provider>
      </ThemeDispatchContext.Provider>
    </>
  );
}

export default App;
