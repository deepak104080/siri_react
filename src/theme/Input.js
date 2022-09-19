import React, { useState } from "react";

const Input = () => {
    const [array, setArray] = useState([]);

    const addInArray = (event) => {
        console.log(event.target.value);
        setArray([...array, event.target.value]);
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
                    <button>Add in List</button>

                </div>
            </div>

        </>
    )
}

export default Input;

// HW
// Background color from user
// To Do App