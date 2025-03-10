// Import React
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Import Redux
import { useSelector, useDispatch } from "react-redux";

// Import Service
import { verifyOtp } from "../services/authService";

// Import Feature
import { checkUser, setUser, logout } from "../features/auth/authSlice";

// Import Constant
import PATHS from "../constants/path";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { userInfo, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [isInitialCheckDone, setIsInitialCheckDone] = useState(false);

  useEffect(() => {
    let mounted = true;
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("accessToken");
      if (token && mounted) {
        await dispatch(checkUser());
      }
      setIsInitialCheckDone(true);
    };
    checkAuthStatus();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  // console.log(userInfo);

  useEffect(() => {
    if (isInitialCheckDone && !loading) {
      if (isAuthenticated && location.pathname === PATHS.AUTH) {
        navigate(PATHS.HOME);
      } else if (!isAuthenticated && location.pathname !== PATHS.AUTH) {
        navigate(PATHS.AUTH);
      }
    }
  }, [
    loading,
    isAuthenticated,
    isInitialCheckDone,
    navigate,
    location.pathname,
  ]);

  const login = async (email, otp) => {
    const response = await verifyOtp(email, otp);
    if (response.statusCode === 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      dispatch(setUser(response.data.userInfo));
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());
    navigate(PATHS.AUTH);
  };

  const value = {
    userInfo,
    login,
    logoutUser,
    isAuthenticated,
  };

  if (loading) {
    return (
      <div className="loading-container">
        <h1>Đang tải...</h1>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
