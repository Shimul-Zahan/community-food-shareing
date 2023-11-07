import React, { useContext } from 'react'
import { MyAuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(MyAuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/sign-up'></Navigate>
}

export default PrivateRoute