import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { GlobalContext } from './App';

const ProtectedRoute = (props) => {
    console.log('props in protected route - ', props);
    const localContext = useContext(GlobalContext);
    const {store, setStore} = localContext;
    const loginStatus = localContext.store.loginStatus;
    if(!loginStatus) {
        //update store - lastPage with API_Functional/apifn
        setStore({...store, lastPage: props.name})
        return <Navigate to="/login" />;
    }
    return props.children;
}

export default ProtectedRoute
