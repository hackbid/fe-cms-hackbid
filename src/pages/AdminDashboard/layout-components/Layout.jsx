import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mt-8 block">
      <Outlet />
    </div>
  );
};
export default Layout;
