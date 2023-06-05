import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component, isLoggedIn, }) {
  console.log(isLoggedIn)
  return isLoggedIn ? <Component /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
