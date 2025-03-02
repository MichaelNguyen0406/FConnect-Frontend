// Page
import Authentication from "../pages/Authentication";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import Home from "../pages/Home";
import Chat from "../pages/Chat";

// Layout

export const routes = [
  {
    path: "/",
    component: Home,
    layout: null,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/authentication",
    component: Authentication,
    layout: null,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/chat/:id/:receiverId",
    component: Chat,
  },
  {
    path: "/chat",
    component: Chat,
  },
];
