import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { ThemeContext } from "styled-components";
import { themes } from "./models/Theme";
import { useReducer } from "react";
import { ThemesReducer } from "./reducers/ThemesReducer";
import { ThemeDispatchContext } from "./contexts/ThemeDispatchContext";

function App() {
  const [theme, dispatch] = useReducer(ThemesReducer, themes.dark);
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
