import { createBrowserRouter, Link } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Phones } from "../pages/Phones";
import { About } from "../pages/About";
import { Layout } from "../Layout/Layout";
import { PhoneDetails } from "../pages/PhoneDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/phones/*",
        element: <Phones />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phones/:id",
        element: <PhoneDetails />,
      },
    ],
  },


  {
    path: "*",
    element: (
      <div>
        <h1>404 Not found</h1>
        <button>
          <Link to="/">go to Home page </Link>
        </button>
      </div>
    ),
  },
]);
