import React, { useEffect } from 'react'

const API_Functional = () => {

    const callApi = async () => {
        let response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
        let finalData = await response.json();
        console.log(finalData);
        console.log(finalData.dataseries);
        //store finalData.dataseries in state variable
    }


    useEffect(() => {
        callApi();
    })

    return (
        <div>
        
        </div>
    )
}

export default API_Functional


// Async JS
// Callback Methods
// Promise
// Async Await


