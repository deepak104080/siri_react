import React, { createContext, useState } from 'react';
import ContextChild1 from './ContextChild1';

const NameContext = createContext();

const ContextParent = () => {
    const [name, setName] = useState('India');

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <h4 className='text-success'>This is parent component</h4>
                <NameContext.Provider value={name}>
                    <ContextChild1/>
                </NameContext.Provider>
            </div>
        </div>
    )
}

export default ContextParent;
export {NameContext};


// Context
// Provider
// Consumer