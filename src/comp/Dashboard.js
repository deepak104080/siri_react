import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const {state} = useLocation();
    console.log('Data from login page - ', state);
    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <h1>Dashboard page - {state.username}</h1>
            </div>
        </div>
    )
}

export default Dashboard;
