import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Animals } from "./components/Animals";
import { Animal } from "./components/Animal";
import { Layout } from "./components/Layout";
import { About } from "./components/About";
import { animalsLoader } from "./loaders/animalsLoader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        index: true,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/animals',
        element: <Animals></Animals>,
        loader: animalsLoader,
      },
      {
        path: '/animal/:id',
        element: <Animal></Animal>
      }
    ]
  },

])
