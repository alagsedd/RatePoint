import MainNavBar from "../Components/NavBar/MainNavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
};

export default Layout;
