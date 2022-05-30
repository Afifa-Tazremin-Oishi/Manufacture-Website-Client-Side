import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {

    // get user
    const [user, loading] = useAuthState(auth);

    // location
    const location = useLocation();

    // loading
    if (loading) {
        return <Loading></Loading>
    }

    // redirect to login page if user is not logged in
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if user is logged in return the exact page
    return children;

};


export default RequireAuth;