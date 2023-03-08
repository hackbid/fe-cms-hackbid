import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import User from "./pages/User/User.jsx";
import Item from "./pages/Item/Item.jsx";
import SummaryDashboard from "./pages/SummaryDashboard/SummaryDashboard.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Reported from "./pages/Reported Items/Reported.jsx";
import Refund from "./pages/Refund/Refund.jsx";
import { triggerNotification } from "./util/successNotification.js";
import NotFound from "./pages/404/404.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,
    loader: () => {
      const access_key = localStorage.getItem("access_key");
      if (!access_key) {
        triggerNotification(
          "You are not logged in, please login first",
          "info"
        );
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
        path: "Withdraw",
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
    loader: () => {
      const access_key = localStorage.getItem("access_key");
      if (access_key) {
        triggerNotification("You are already logged in", "info");
        return redirect("/");
      } else {
        return null;
      }
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={route} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
