import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// components & pages
import Auth from "@/pages/Auth";
import ProtectedRoute from "@/components/auth/ProtectedRoutes";
// types
import { AppAuth } from "@/types/components.type";

const Home = lazy(() => import("@/pages/Home"));

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
