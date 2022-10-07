import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App';

const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const localContext = useContext(GlobalContext);
    const {store, setStore} = localContext;

    const usernameFn = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    const loginFn = () => {
        //make and api call to check login
        if(username === 'ns123') {
            //update variable in context
            setStore({
                ...store,
                loginStatus: true,
                userName: username
            })
            //navigate dashboard
            navigate('/dashboard', {state : {username: username}});
        }
        else {
            //show error
            alert('Error');
        }
    }
    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                    Userid - <input type="text" id="name" onBlur={usernameFn}/>
                    <br></br>
                    Password - <input type="password" id="country"/>
                    <br></br>
                    <button onClick={loginFn}>Login</button>
                    <br></br><br></br>
            </div>
        </div>
    )
}

export default Login


// Authorization
// Authentication