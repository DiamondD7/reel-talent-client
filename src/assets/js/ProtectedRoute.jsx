import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthorized = sessionStorage.getItem("authorized") === "true";

  if (!isAuthorized) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
