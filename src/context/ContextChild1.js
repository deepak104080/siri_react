import React from 'react'
import ContextChild2 from './ContextChild2'

const ContextChild1 = () => {
    return (
        <div>
            <h4 className='text-success'>This is child 1 component</h4>
                <ContextChild2/>
        </div>
    )
}

export default ContextChild1
