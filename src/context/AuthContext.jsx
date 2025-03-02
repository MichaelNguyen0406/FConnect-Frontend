import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Import Service
import { checkUser } from "../services/authService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const check = async () => {
      try {
        const response = await checkUser();
        // console.log(response);
        if (response.statusCode === 200) {
          setUserLogin(true);
          setUserId(response.data.userInfo);
          localStorage.setItem("userInfo", response.data.userInfo);
        } else {
          setUserLogin(null);
          setUserId(null);
        }
      } catch (error) {
        console.log("Please login.", error);
      } finally {
        setLoading(false);
      }
    };
    check();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (userLogin) {
        if (location.pathname === "/authentication") {
          navigate("/chat");
        }
      } else {
        navigate("/authentication");
      }
    }
  }, [loading, userLogin, navigate, location.pathname]);

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUserLogin(null);
    setUserId(null);
    navigate("/authentication");
  };

  const value = { userId, logout };

  if (loading) return <h1>Loading...</h1>;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
