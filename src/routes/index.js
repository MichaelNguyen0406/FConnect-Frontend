// Page
import Authentication from "../pages/Authentication";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";

// Layout

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    protected: true,
  },
  {
    path: "/authentication",
    component: Authentication,
    layout: null,
  },
  {
    path: "/user",
    component: User,
    protected: true,
  },
];
