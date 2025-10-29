import { createBrowserRouter } from "react-router-dom";
import PublicHomePage from "../Pages/HomePages/PublicHomePage";
import Layout from "../Layouts/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FindProperty from "../Pages/FindProperty/FindProperty";
import Collectors from "../Pages/Collectors/Collectors";
import Municipalities from "../Pages/Municipalities/Municipalities";
import Support from "../Pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PublicHomePage /> },
      { path: "/find-property", element: <FindProperty /> },
      { path: "/collectors", element: <Collectors /> },
      { path: "/municipalities", element: <Municipalities /> },
      { path: "/support", element: <Support /> },
    ],
  },
]);

export default router;
