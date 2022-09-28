import React, { createContext, useEffect, useState } from 'react';
import ContextChild1 from './ContextChild1';

const NameContext = createContext();

const ContextParent = () => {
    const [name, setName] = useState('India');
    const [count, setCount] = useState(0);

    // const [obj, setObj] = useEffect({name: '', count: 0, status: false});

    useEffect(() => {
        console.log('Parent re render.');
    })

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <h4 className='text-success'>This is parent component</h4>
                <NameContext.Provider value={{name, setName, count, setCount}}>
                    <ContextChild1/>
                </NameContext.Provider>
                {/* <NameContext.Provider value={{obj, setObj}}>
                    <ContextChild1/>
                </NameContext.Provider> */}
            </div>
        </div>
    )
}

export default ContextParent;
export {NameContext};


// Context
// Provider
// Consumer


// let name = 'abc';



// let name2={
//     temp1: 'abc',
//     temp2: 'def',
//     temp3: 'lmn'
// }