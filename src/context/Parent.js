import React, { useState } from 'react';
import Child1 from './Child1';

const Parent = () => {
    const [name, setName] = useState('India');
    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <h4 className='text-success'>This is parent component</h4>
                <Child1 name={name}/>
            </div>
        </div>
    )
}

export default Parent;
