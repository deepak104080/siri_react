import React, { useState } from 'react'

const LiftState_Child = (props) => {
    
    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                {/* Name - {props.data} */}
                <button onClick={() => props.fnCountry('India')}>Send Country Name to Parent - India</button>
                <button onClick={() => props.fnCountry('Pakistan')}>Send Country Name to Parent - Pakistan</button>
                <button onClick={() => props.fnCountry('USA')}>Send Country Name to Parent - USA</button>
                <button onClick={() => props.fnCountry('China')}>Send Country Name to Parent - China</button>
                <button onClick={() => props.fnCountry('Russia')}>Send Country Name to Parent - Russia</button>
                <br></br>
                <h4>Country - {props.country}</h4>
            </div>
        </div>
    )
}

export default LiftState_Child;
