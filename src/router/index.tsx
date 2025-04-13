import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchResults from "../pages/SearchResults";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, authLoading } = useAuth();

  if (!user && !authLoading) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, authLoading } = useAuth();

  if (user && !authLoading) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const ErrorRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/search/:query",
    element: (
      <ProtectedRoute>
        <SearchResults />
      </ProtectedRoute>
    ),
    errorElement: <ErrorRedirect />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
