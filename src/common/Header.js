import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const localContext = useContext(GlobalContext);
    const {store, setStore} = localContext;

    const logoutFn = () => {
        setStore({
          ...store,
          loginStatus: false,
          userName: ''
      })
    }

    return (
      <div className="row bg-info bg-opacity-50">
                      <div className="col-8">
                          <h3>Newton School - Siri</h3>
                      </div>
                      <div className="col-4 text-end">
                        {/* <Link to='/login/' className="btn btn-primary">Login</Link>
                        <button onClick={logoutFn} className="btn btn-danger">Log Out</button> */}
                        {store.loginStatus && `Hi, ${store.userName} `} 
                        {
                          store.loginStatus ? (<button onClick={logoutFn} className="btn btn-danger">Log Out</button>)
                           :
                          (<Link to='/login/' className="btn btn-primary">Login</Link>)
                        }

                      </div>
                  </div>
    )
}

export default Header
