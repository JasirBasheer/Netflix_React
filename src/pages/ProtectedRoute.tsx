import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import React, { ReactNode } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const authUser = UserAuth();
    const user = authUser?.user;
    console.log(user)

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
