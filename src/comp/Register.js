import React, { useEffect, useState } from 'react'

const Register = () => {
    const initialValues = {
        name: '',
        age: '',
        mobile: '',
        email: '',
        city: '',
        password: ''
    }
    const [formdata, setFormdata] = useState(initialValues);
    const [errordata, setErrordata] = useState({});
    const [status, setStatus] = useState(false);

    const tempAddInput = (event) => {
        console.log(event.target.value, event.target.id);
        let tempObj = {};
        tempObj[event.target.id] = event.target.value;
        setFormdata({...formdata, ...tempObj});
        //skip onblur validation for now
    }

    const register = () => {
        let validateObj = validate();
        console.log(validateObj);
        // if validate ok - make api call else show error
        if(Object.keys(validateObj).length === 0) {
            console.log('api call to register');
            //api call to register
            setStatus(true);
        }
        else {
            //show error
        }
    }

    // const validateForm = () => {
    //     let tempErrorObj = {};
    //     tempErrorObj.name = validate('name').name;
    //     tempErrorObj.age = validate('age').age;
    //     tempErrorObj.city = validate('city').city;
    //     tempErrorObj.mobile = validate('mobile').mobile;
    //     tempErrorObj.email = validate('email').email;
    //     tempErrorObj.password = validate('password').password;
    //     console.log('tempErrorObj', tempErrorObj);
    //     setErrordata({...errordata, ...tempErrorObj});
    //     return tempErrorObj;
    // }

    const validate = () => {
        let nameRegex = /^([0-9]*)$/
        let mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        let errorObj = {};

        if(formdata.name === '') {
                    console.log('error in name');
                    errorObj.name = 'Error in name';
                    // setErrordata(...errordata, ...{name: 'Error in name'});
                }
                if(formdata.age === '' ||  formdata.age < 0 || formdata.age > 100) {
                    console.log('error in age');
                    errorObj.age = 'Error in age';
                    // setErrordata(...errordata, ...{age: 'Error in age'});
                }
                if(formdata.city === '' || nameRegex.test(formdata.city)) {
                    console.log('error in city');
                    errorObj.city = 'Error in city';
                    // setErrordata(...errordata, ...{city: 'Error in city'});
                }
                if(formdata.mobile === '' || !mobileRegex.test(formdata.mobile)) {
                    console.log('error in mobile');
                    errorObj.mobile = 'Error in mobile';
                    // setErrordata(...errordata, ...{mobile: 'Error in mobile'});
                }
                if(formdata.email === '' || !emailRegex.test(formdata.email)) {
                    console.log('error in email');
                    errorObj.email = 'Error in email';
                    // setErrordata(...errordata, ...{email: 'Error in email'});
                }
                if(formdata.password === '' || formdata.password.length < 5) {
                    console.log('error in password');
                    errorObj.password = 'Error in password';
                    // setErrordata(...errordata, ...{password: 'Error in password'});
                }

        // switch (temp) {
        //     case 'name':
        //         console.log('inside switch name');
        //         if(formdata.name === '') {
        //             console.log('error in name');
        //             errorObj.name = 'Error in name';
        //             // setErrordata(...errordata, ...{name: 'Error in name'});
        //         }
        //         break;
        //     case 'age':
        //         console.log('inside switch age');
        //         if(formdata.age === '' ||  formdata.age < 0 || formdata.age > 100) {
        //             console.log('error in age');
        //             errorObj.age = 'Error in age';
        //             // setErrordata(...errordata, ...{age: 'Error in age'});
        //         }
        //         break;
        //     case 'city':
        //         console.log('inside switch city');
        //         if(formdata.city === '' || nameRegex.test(formdata.city)) {
        //             console.log('error in city');
        //             errorObj.city = 'Error in city';
        //             // setErrordata(...errordata, ...{city: 'Error in city'});
        //         }
        //         break;
        //     case 'mobile':
        //         console.log('inside switch mobile');
        //         if(formdata.mobile === '' || !mobileRegex.test(formdata.mobile)) {
        //             console.log('error in mobile');
        //             errorObj.mobile = 'Error in mobile';
        //             // setErrordata(...errordata, ...{mobile: 'Error in mobile'});
        //         }
        //         break;
        //     case 'email':
        //         console.log('inside switch email');
        //         if(formdata.email === '' || !emailRegex.test(formdata.email)) {
        //             console.log('error in email');
        //             errorObj.email = 'Error in email';
        //             // setErrordata(...errordata, ...{email: 'Error in email'});
        //         }
        //         break;
        //     case 'password':
        //         console.log('inside switch password');
        //         if(formdata.password === '' || formdata.password.length < 5) {
        //             console.log('error in password');
        //             errorObj.password = 'Error in password';
        //             // setErrordata(...errordata, ...{password: 'Error in password'});
        //         }
        //         break;
        //     default:
        //         break;
        // }
        
        console.log(errorObj);
        setErrordata({...errordata, ...errorObj});
        return errorObj;
    }

    useEffect(() => {
        console.log('formdata - ', formdata, errordata);
    }, [formdata, errordata])

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <h3>NS Registration Form</h3>
            </div>
            {
                status && (
                <div class="alert alert-success" role="alert">
                    Registered successfully...
                </div>
                )
            }
            <div className="col-12">
                Name - <input type="text" id="name" onBlur={tempAddInput}/>
                <span className='text-danger'>{errordata.name}</span>
                <br></br>
                Age - <input type="number" id="age" onBlur={tempAddInput}/>
                <span className='text-danger'>{errordata.age}</span>
                <br></br>
                City - <input type="text" id="city" onBlur={tempAddInput}/>
                <span className='text-danger'>{errordata.city}</span>
                <br></br>
                Mobile - <input type="text" id="mobile" onBlur={tempAddInput}/>
                <span className='text-danger'>{errordata.mobile}</span>
                <br></br>
                Email - <input type="email" id="email" onBlur={tempAddInput}/>
                <span className='text-danger'>{errordata.email}</span>
                <br></br>
                Password - <input type="password" id="password" onBlur={tempAddInput}/>
                <span className='text-danger'>{errordata.password}</span>
                <br></br>
                <button onClick={register}>Register on Newton School</button>
                <br></br><br></br>
            </div>
        </div>
    )
}

export default Register;
