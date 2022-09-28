import React, {useEffect} from 'react'
import ContextChild4 from './ContextChild4'

const ContextChild3 = () => {
    useEffect(() => {
        console.log('child 3 re render.');
    })

    return (
        <div>
            <h4 className='text-success'>This is child 3 component</h4>
                <ContextChild4/>
          
        </div>
    )
}

export default ContextChild3
