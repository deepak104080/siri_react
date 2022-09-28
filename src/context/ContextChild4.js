import React, { useContext, useEffect } from 'react';
import { NameContext  } from './ContextParent';

const ContextChild4 = () => {
    
    const temp = useContext(NameContext);

    useEffect(() => {
        console.log('child 4 re render.');
    })

    return (
        <div>
            <h4 className='text-success'>This is child 4 component</h4>
            <h3>Name - {temp.name}</h3>
            <br></br>
            <h3>Count - {temp.count}</h3>
            <button onClick={() => temp.setCount(temp.count + 1)}>Count Increase</button>
        </div>
    )
}

export default ContextChild4;
