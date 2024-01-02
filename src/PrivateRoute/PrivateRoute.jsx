import React from 'react';
import UseAuth from '../hooks/UseAuth';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = ({children}) => {

    const {user, loading} = UseAuth();

    if(loading) return <h1 className="text-7xl">Loading</h1>

    if (!user?.email) {
        toast.error('Please Login First');
        return <Navigate to='/login'/>
        
    }


    return children


};

export default PrivateRoute;