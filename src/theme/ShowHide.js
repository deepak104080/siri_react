import React, { useState } from "react";



const ShowHide = () => {
    const [show, setShow] = useState(true);

    const showFn = () => {
        setShow(true);
    }

    const hideFn = () => {
        setShow(false);
    }


    const [toggle, setToggle] = useState(true);

    const toggleFn = () => {
        // if true - setToggle(false)
        // if false - setToggle(true)
        setToggle(toggle => !toggle);
    }



    const [color, setColor] = useState(false);

    const applyColor = (color) => {
        if(color === 'red') {
            setColor(true);
        }
        else {
            setColor(false)
        }
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





                    <button className="btn btn-success" onClick={toggleFn}>Toggle Button</button>

                    {
                        toggle && (<div>This content is to be displayed on Toggle Button Click.</div>)
                    }





                    <button className="btn btn-danger" onClick={() => applyColor('red')}>Set Red</button>
                    <button className="btn btn-success" onClick={() => applyColor('green')}>Set Green</button>

                    {
                        color ? (<h4 className="bg-danger">Red Box</h4>) : (<h4 className="bg-success">Green Box</h4>)
                    }
                    
                </div>
            </div>
        </>
    )
}

export default ShowHide;


// && operator - if
// ? : - ternary operatror - if else

// HW
// implement toggle
// implement ternary operator

// HW
//try multi-color option as background