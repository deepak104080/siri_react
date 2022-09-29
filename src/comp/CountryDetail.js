import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    const {id} = useParams();
    console.log('Country - ',id);

    const [countryData, setCountryData] = useState({});

    const callCountryApi = async (id) => {
        let response = await fetch(`https://restcountries.com/v3.1/name/${id}`).catch(err => console.log(err));
        let finalData = await response.json();
        console.log(finalData[0]);
        setCountryData(finalData[0]);
    }

    useEffect(() => {
        callCountryApi(id);
    },[])

    useEffect(() => {
        console.log(Object.keys(countryData));
    })

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <h2>This is country details page.</h2>
                {
                    Object.keys(countryData).length > 0 && (
                        <>
                            <h4>Name - {countryData.name.common}</h4>
                            <h4>Name - {countryData.name.official}</h4>
                            <h4>Name - {countryData.capital[0]}</h4>
                            <h4>Name - {countryData.region}</h4>
                            <h4>Name - {countryData.languages.eng}</h4>
                            <h4>Name - {countryData.population}</h4>
                            <h4>Name - {countryData.continents}</h4>
                        </>
                    )
                }
                
                <Link to="/countrylist">Go Back to List Page.</Link>
            </div> 
        </div>
    )
}

export default CountryDetail
