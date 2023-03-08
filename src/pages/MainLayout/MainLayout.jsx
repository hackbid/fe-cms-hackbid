import HeaderMain from "../AdminDashboard/layout-components/HeaderMain.jsx";
import Layout from "../AdminDashboard/layout-components/Layout.jsx";
import { useState } from "react";

const MainLayout = () => {
  const [path, setPath] = useState(window.location.pathname);
  if (path === "/") {
    setPath("Home");
  }
  return (
    <main className="flex-1">
      <Layout />
    </main>
  );
};

export default MainLayout;
