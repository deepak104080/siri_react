import React from 'react';
import Child4 from './Child4';


const Child3 = (props) => {
    return (
        <div>
            <h4 className='text-info'>This is child 3 component</h4>
            <Child4 name={props.name}/>
        </div>
    )
}

export default Child3
