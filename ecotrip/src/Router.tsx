import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Calculate } from "./pages/Calculate";
import { Info } from "./pages/Info";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/calculate",
        element: <Calculate></Calculate>,
      },
      {
        path: "/info",
        element: <Info></Info>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
