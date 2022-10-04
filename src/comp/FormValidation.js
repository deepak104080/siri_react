import React, { useState } from 'react'

const FormValidation = () => {

    // const initialObj = {};
    // const initialObj2 = {
    //     name: 'deepak',
    //     age: '111',
    //     city: 'delhi',
    //     country: 'india'
    // };

    const [formData, setFormData] = useState({});

    const addInputValue = (event) =>{
        console.log(event.target.id, event.target.value);
        let tempObj = {}
        // formData.name = 'deepak';
        // formData.age = '111';
        tempObj[event.target.id] = event.target.value;
        console.log(tempObj);
        setFormData({...formData, ...tempObj}); //async mode
        // console.log(formData); - old value
    }

    const registerFunction = () => {
        console.log('Form Data');
        console.log(formData);

        //add validations here
        
        //api call to send form data to back end/database/third party
        // fetch('<api url>', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then((res) => {
        //     return res.json();
        // })
        // .then((finalData) => {
        //     console.log(finalData);
        // })
        // .catch((error) => {
        //     console.log('failed respnse', error);
        // })
    }

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                Name - <input type="text" id="name" onBlur={addInputValue}/>
                <br></br>
                Age - <input type="text" id="age" onBlur={addInputValue}/>
                <br></br>
                City - <input type="text" id="city" onBlur={addInputValue}/>
                <br></br>
                Country - <input type="text" id="country" onBlur={addInputValue}/>
                <br></br>
                <button onClick={registerFunction}>Register on Newton School</button>
                <br></br><br></br>

            </div>
        </div>
    )
}

export default FormValidation
