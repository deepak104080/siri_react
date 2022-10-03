import React from 'react';
import withFilter from './withFilter';

const array = ['India', 'Pak', 'Canada', 'USA', 'UK', 'Australia', 'Brazil'];

const Country = (props) => {
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

export default withFilter(Country, array);
