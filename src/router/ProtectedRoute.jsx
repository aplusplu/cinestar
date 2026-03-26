import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const isLoggedIn = localStorage.getItem("cinestar_is_logged_in") === "true";
  const role = localStorage.getItem("cinestar_user_role");

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}
