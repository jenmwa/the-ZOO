import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Animals } from "./components/Animals";
import { Animal } from "./components/Animal";
import { Layout } from "./components/Layout";
import { About } from "./components/About";

//const [animals, setAnimals] = useState([]);

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
        element: <Animals></Animals>
      },
      {
        path: '/animal/:id',
        element: <Animal></Animal>
      }
    ]
  },

])