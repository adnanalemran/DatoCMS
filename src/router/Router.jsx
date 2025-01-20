
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/Home/HomePage";
import LandingLayout from "../layout/LandingLayout";
import ErrorPage from "../components/common/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ],
  },
]);