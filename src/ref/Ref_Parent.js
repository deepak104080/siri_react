import React, { useRef } from 'react';
import Ref_Child from './Ref_Child';

const Ref_Parent = () => {
    const ref1 = useRef();

    const passRef = () => {
        ref1.current.innerHTML = 'Ref Data passed................'
    }

    return (
        <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <button onClick={passRef}>Trigger Ref</button>
                    <br></br>
                    <Ref_Child name="deepak" ref={ref1}/>
                </div>

        </div>
        

    )
}

export default Ref_Parent
