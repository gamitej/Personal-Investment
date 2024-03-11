import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// components & pages
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/components/auth/ProtectedRoutes";
// types
import { AppAuth } from "@/types/components.type";

const Home = lazy(() => import("@/pages/Home"));
const Stocks = lazy(() => import("@/pages/Stocks"));
const Expenses = lazy(() => import("@/pages/Expenses"));
const Savings = lazy(() => import("@/pages/Savings"));

const Router = (props: AppAuth) => {
  const route = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute {...props} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/stocks",
          element: <Stocks />,
        },
        {
          path: "/expenses",
          element: <Expenses />,
        },
        {
          path: "/savings",
          element: <Savings />,
        },
      ],
    },

    {
      path: "/login",
      element: <Auth {...props} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return route;
};

export default Router;
