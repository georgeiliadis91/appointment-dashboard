import React from "react";
import { Navigate } from "react-router-dom";
import { DashBoardLayout } from "./layout/dashboard";
import NotFoundView from "./views/errors/NotFoundView";
import { Customers } from "./views/customers/Customers";
import Clients from "./views/clients/";
import { ClientProfile } from "./views/clientProfile/";
import { Login } from "./views/login/Login";
import { PublicLayout } from "./layout/public/PublicLayout";
import { Calendar } from "./views/calendar/Calendar";
import { Home } from "./views/home/Home";
// TODO construct the children based on API response

const routes = [
  {
    path: "app",
    element: <DashBoardLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "customers", element: <Customers /> },
      { path: "clients", element: <Clients /> },
      { path: "clients/:id", element: <ClientProfile /> },
      { path: "calendar", element: <Calendar /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <Login /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
