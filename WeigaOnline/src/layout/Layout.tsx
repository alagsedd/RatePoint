import { Outlet } from "react-router-dom";
import NavBar from "../componenets/NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
