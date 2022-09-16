import React, { useState } from "react";



const ShowHide = () => {
    const [show, setShow] = useState(true);

    const showFn = () => {
        setShow(true);
    }

    const hideFn = () => {
        setShow(false);
    }

    return(
        <>
            <div className="row bg-primary bg-opacity-50">
                <div className="col-12">
                    <button className="btn btn-success" onClick={showFn}>Show</button>
                    <button className="btn btn-danger" onClick={hideFn}>Hide</button>

                    {
                        show && (<div>This content is to be displayed on Show Button Click.</div>)
                    }
                    
                </div>
            </div>
        </>
    )
}

export default ShowHide;


// && operator - if
// ? : - ternary operatror - if else

//HW
// implement toggle
// implement ternary operator