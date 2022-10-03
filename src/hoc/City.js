import React from 'react';
import withFilter from './withFilter';

const array = ['Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Mumbai', 'Patna', 'Pune']

const City = (props) => { 
  return (
    <div className="row bg-secondary bg-opacity-50">
                <div className="col-12">
                    <ul>
                        {
                            props.list && props.list.map(item => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                    </div>
                    </div>
  )
}

export default withFilter(City, array);
