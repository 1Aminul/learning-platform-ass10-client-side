
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/ContextAuth';

export const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    let location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="success" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    return children;
    
};

