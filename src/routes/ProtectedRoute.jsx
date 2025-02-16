// React Router Dom
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userInfo") || "null");

  return user ? children : <Navigate to="/authentication" replace />;
};

export default ProtectedRoute;
