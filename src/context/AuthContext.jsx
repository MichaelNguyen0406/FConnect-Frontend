import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Import Service
import { checkUser } from "../services/authService";

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
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
          setUserInfo(response.data);
        } else {
          setUserLogin(null);
          setUserInfo(null);
        }
      } catch (error) {
        console.log("Please login.", error);
      } finally {
        setLoading(false);
      }
    };
    check();
  }, [userLogin]);

  useEffect(() => {
    // console.log(userLogin);
    // console.log(loading);
    if (!loading) {
      if (userLogin) {
        if (location.pathname === "/authentication") {
          navigate("/");
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
    setUserInfo(null);
    navigate("/authentication");
  };

  const value = { userInfo, logout, setUserLogin };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
