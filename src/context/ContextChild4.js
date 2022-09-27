import React, { useContext } from 'react';
import { NameContext  } from './ContextParent';

const ContextChild4 = () => {
    const temp = useContext(NameContext);
    return (
        <div>
            <h4 className='text-success'>This is child 4 component</h4>
            <h3>Name - {temp}</h3>
        </div>
    )
}

export default ContextChild4;
