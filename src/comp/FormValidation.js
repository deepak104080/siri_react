import React, { useState } from 'react'

const FormValidation = () => {

    const initialObj = {};
    // const initialObj2 = {
    //     name: '',
    //     age: '',
    //     city: '',
    //     country: ''
    // };

    const [formData, setFormData] = useState(initialObj);

    const addInputValue = (event) =>{
        console.log(event.target.name, event.target.value);
        let tempObj = {}
        tempObj[event.target.name] = event.target.value;
        console.log(tempObj);
        setFormData({...formData, ...tempObj}); //async mode
        // console.log(formData); - old value
    }

    const registerFunction = () => {
        console.log('Form Data');
        console.log(formData);
    }

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                Name - <input type="text" name="name" onBlur={addInputValue}/>
                <br></br>
                Age - <input type="text" name="age" onBlur={addInputValue}/>
                <br></br>
                City - <input type="text" name="city" onBlur={addInputValue}/>
                <br></br>
                Country - <input type="text" name="country" onBlur={addInputValue}/>
                <br></br>
                <button onClick={registerFunction}>Register on Newton School</button>
                <br></br><br></br>

            </div>
        </div>
    )
}

export default FormValidation
