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
                        {/* Replace a with Link */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
