import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = () => {
    const country = ['india', 'usa', 'russia', 'pak', 'canada'];
    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                {
                    country && country.map(item => (
                        <Link key={item} to={`/countrydetail/${item}`} className='btn btn-info'>{item.toUpperCase()}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CountryList
