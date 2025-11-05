import { createBrowserRouter } from "react-router-dom";
import PublicHomePage from "../Pages/HomePages/PublicHomePage";
import Layout from "../Layouts/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FindProperty from "../Pages/FindProperty/FindProperty";
import Collectors from "../Pages/Collectors/Collectors";
import Municipalities from "../Pages/Municipalities/Municipalities";
import Support from "../Pages/Support/Support";
import CollectorAuth from "../Components/Auth/CollectorAuth/CollectorAuth";
import MunicipalAuth from "../Components/Auth/MunicipalAuth/MunicipalAuth/MunicipalAuth";
import PropertyOwnerAuth from "../Components/Auth/PropertyOwnerAuth/PropertyOwnerAuth";
import RoleSelection from "../Components/Auth/RoleSelection/RoleSelection";
import OTPVerification from "../Components/Auth/OTPVerification/OTPVerification";
import Dashboard from "../Pages/DashBoard/DashBoard";

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
      { path: "/dashboard", element: <Dashboard /> },
      // NEW authentication routes
      { path: "/auth/role-selection", element: <RoleSelection /> },
      { path: "/auth/property-owner", element: <PropertyOwnerAuth /> },
      { path: "/auth/collector", element: <CollectorAuth /> },
      { path: "/auth/municipal", element: <MunicipalAuth /> },
      { path: "/auth/otp-verification", element: <OTPVerification /> },
    ],
  },
]);

export default router;
