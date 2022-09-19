import React from 'react'

const Navbar = () => {
  return (
    <div className="row bg-warning bg-opacity-50">
                    <div className="col-12">
                        
                    <div className=''>
                        <a href='/home' className="btn btn-primary">Home</a>
                        <a href='/about' className="btn btn-primary">About</a>
                        <a href='/root' className="btn btn-primary">Root</a>
                        <a href='/counterfn' className="btn btn-primary">CounterFunctional</a>
                        <a href='/showhide' className="btn btn-primary">ShowHide</a>
                        <a href='/loop' className="btn btn-primary">Loop</a>
                        <a href='/input' className="btn btn-primary">Input</a>
                        {/* Replace a with Link */}
                    </div>

                    </div>
                </div>
  )
}

export default Navbar
