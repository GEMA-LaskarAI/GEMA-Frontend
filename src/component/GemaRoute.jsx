import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? children : <Navigate to="/login" replace />;
}

export function PublicRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? <Navigate to="/dashboard" replace /> : children;
}
