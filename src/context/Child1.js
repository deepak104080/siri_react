import React from 'react';
import Child2 from './Child2';

const Child1 = (props) => {
    return (
        <div>
            <h4 className='text-danger'>This is child 1 component</h4>
                <Child2 name={props.name}/>
        </div>
    )
}

export default Child1
