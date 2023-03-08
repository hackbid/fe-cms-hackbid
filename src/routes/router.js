import { createBrowserRouter, redirect } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard.jsx";
import SummaryDashboard from "../pages/SummaryDashboard/SummaryDashboard.jsx";
import User from "../pages/User/User.jsx";
import Item from "../pages/Item/Item.jsx";
import Refund from "../pages/Refund/Refund.jsx";
import Reported from "../pages/Reported Items/Reported.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import React from "react";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      console.log(access_token);
      if (!access_token) {
        return redirect("/login");
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/",
        element: <SummaryDashboard />,
      },
      {
        path: "User",
        element: <User />,
      },
      {
        path: "Item",
        element: <Item />,
      },
      {
        path: "Refund",
        element: <Refund />,
      },
      {
        path: "Reported",
        element: <Reported />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default route;
