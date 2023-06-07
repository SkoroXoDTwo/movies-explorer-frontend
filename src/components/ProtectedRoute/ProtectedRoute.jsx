import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component, isLoggedIn, ...props }) {
  return isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
