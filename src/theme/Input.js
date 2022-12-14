import React, { useState } from "react";

const Input = () => {
    const [array, setArray] = useState([]);

    const addInArray = (event) => {
        console.log(event.target.value);
        setArray([...array, event.target.value]); //array.push
    }


    
    
    return (
        <>
            <div className="row bg-warning bg-opacity-50">
                <div className="col-12">

                    <ul>
                        {
                            array.map(item => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>

                    Enter your input: <input type="text" onBlur={addInArray} />
                    
                    <br></br><br></br><br></br><br></br>









                    


                </div>
            </div>

        </>
    )
}

export default Input;

// HW
// Background color from user
// To Do App
// event object