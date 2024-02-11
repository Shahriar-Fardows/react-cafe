import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../Components/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace={true} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
