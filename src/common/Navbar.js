import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row bg-warning bg-opacity-50">
      <div className="col-12">
        <div className=''>
                        <Link to='/home' className="btn btn-primary">Home</Link>
                        <Link to='/about' className="btn btn-secondary">About</Link>
                        <Link to='/root' className="btn btn-success">Root</Link>
                        <Link to='/counterfn' className="btn btn-danger">CounterFunctional</Link>
                        <Link to='/showhide' className="btn btn-warning">ShowHide</Link>
                        <Link to='/loop' className="btn btn-info">Loop</Link>
                        <Link to='/input' className="btn btn-primary">Input</Link>
                        <Link to='/form' className="btn btn-secondary">Form</Link>
                        <Link to='/formvalidation' className="btn btn-success">FormValidation</Link>
                        <Link to='/classcomp' className="btn btn-danger">ClassComp</Link>
                        <Link to='/effectfn' className="btn btn-warning">EffectFunctional</Link>
                        <Link to='/apifn' className="btn btn-info">API_Functional</Link>
                        <Link to='/apiclass' className="btn btn-primary">API_Class</Link>
                        <Link to='/usereducer' className="btn btn-secondary">UseReducer</Link>
                        <Link to='/liftstate' className="btn btn-success">LiftState</Link>
                        <Link to='/propsdrilling' className="btn btn-danger">Props Drilling</Link>
                        <Link to='/context' className="btn btn-warning">Context</Link>
                        <Link to='/countrylist/' className="btn btn-info">Country</Link>
                        <Link to='/login/' className="btn btn-primary">Login</Link>
                        <Link to='/country/' className="btn btn-primary">Country</Link>
                        <Link to='/city/' className="btn btn-primary">City</Link>
                        {/* Replace a with Link */}
        </div>
      </div>
    </div>
  )
}

export default Navbar




// e-commerce
// blog-site