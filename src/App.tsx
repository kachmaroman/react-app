import React, { ReactNode } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/layout/Sidebar';
import useAuth from './hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Sidebar />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />}
      />
    </Routes>
  );
}

export default App;
