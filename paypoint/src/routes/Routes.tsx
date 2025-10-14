import { createBrowserRouter } from "react-router-dom";
import PublicHomePage from "../Pages/HomePages/PublicHomePage";
import Layout from "../Layouts/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <PublicHomePage /> }],
  },
]);

export default router;
