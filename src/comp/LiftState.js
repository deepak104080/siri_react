import React, { useState } from 'react';
import LiftState_Child from './LiftState_Child';

const LiftState = () => {
    const [country, setCountry] = useState('');

    const functionForReceivingData = (data) => {
        console.log(data);
        setCountry(data);
    }
    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                {/* <LiftState_Child data="deepak" /> */}
                <LiftState_Child country={country} fnCountry={functionForReceivingData}/>
                
                <h4>Country in Parent Component - {country}</h4>
            </div>
        </div>
    )
}

export default LiftState;
