import React, {useEffect} from 'react'
import ContextChild2 from './ContextChild2'

const ContextChild1 = () => {
    useEffect(() => {
        console.log('child 1 render.');
    })

    return (
        <div>
            <h4 className='text-success'>This is child 1 component</h4>
                <ContextChild2/>
        </div>
    )
}

export default ContextChild1
