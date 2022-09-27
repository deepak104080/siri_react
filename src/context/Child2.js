import React from 'react';
import Child3 from './Child3';


const Child2 = (props) => {
  return (
      <div>
          <h4 className='text-primary'>This is child 2 component</h4>
          <Child3 name={props.name}/>
      </div>
  )
}

export default Child2
