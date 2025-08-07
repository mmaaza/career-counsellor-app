import React from 'react';
import { Navigate } from 'react-router-dom';
import apiService from '../services/api';

const ProtectedAdminRoute = ({ children }) => {
  const isAuthenticated = apiService.isAuthenticated();
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

export default ProtectedAdminRoute;
