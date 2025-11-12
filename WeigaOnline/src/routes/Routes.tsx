import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/homepage/HomePage";
import Gallery from "../pages/Gallery/Gallery";
import AboutPage from "../pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default router;
