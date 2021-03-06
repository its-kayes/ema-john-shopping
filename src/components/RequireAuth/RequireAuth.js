import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    let [user] = useAuthState(auth);
    let location = useLocation();

    if (!user) {

        return <Navigate to='/login' state={{ from: location }} replace />
        // console.log
    }
    return children;
};

export default RequireAuth;