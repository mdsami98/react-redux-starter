import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

function AuthLayout({ children }) {
    const isLoggedIn = useAuth();

    return !isLoggedIn ? children : <Navigate to='/dashboard' />;
}

export default AuthLayout;
