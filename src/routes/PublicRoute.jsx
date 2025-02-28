// React Router Dom
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo") || "null");

  return user ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
