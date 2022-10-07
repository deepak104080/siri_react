import React, { useCallback, useEffect, useState } from 'react';
import UseCallbackchild from './UseCallbackchild';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Temp Name');

    // const renderChild = (temp) => {
    //     return `Data from parent - ${name} - ${temp}`
    // }

    const renderChild = useCallback((temp) => {
        return `Data from parent - ${name} - ${temp}`
    }, [name]);
    

    useEffect(() => {
        console.log('parent re-rendered');
    })


    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <div>Parent Comp</div>
                <div>Count - {count}</div>
                <button onClick={() => setCount(count + 1)}>Increase Count</button>
                
                <UseCallbackchild tempFn = {renderChild}/>
                <button onClick={() => setName(name+1)}>Name Update</button>
            </div>
        </div>
    )
}

export default UseCallback
