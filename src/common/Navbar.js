import React from 'react'

const Navbar = () => {
  return (
    <div className="row bg-warning bg-opacity-50">
                    <div className="col-12">
                        
                    <div className=''>
                        <a href='/home' className="btn btn-primary">Home</a>
                        <a href='/about' className="btn btn-secondary">About</a>
                        <a href='/root' className="btn btn-success">Root</a>
                        <a href='/counterfn' className="btn btn-danger">CounterFunctional</a>
                        <a href='/showhide' className="btn btn-warning">ShowHide</a>
                        <a href='/loop' className="btn btn-info">Loop</a>
                        <a href='/input' className="btn btn-primary">Input</a>
                        <a href='/form' className="btn btn-secondary">Form</a>
                        <a href='/formvalidation' className="btn btn-success">FormValidation</a>
                        {/* Replace a with Link */}
                    </div>

                    </div>
                </div>
  )
}

export default Navbar
