// React Router Dom
import { useNavigate } from "react-router-dom";

// Import Service
import { checkUser } from "../services/authService";

import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = async () => {
      const response = await checkUser();
      if (response.statusCode !== 200) {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("accessToken");
        return navigate("/authentication");
      }
    };
    check();
  }, [navigate]);
  return children;
};

export default ProtectedRoute;
