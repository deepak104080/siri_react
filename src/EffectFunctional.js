import React, { useEffect } from 'react'

const EffectFunctional = () => {
    //constructor

    console.log('before useEffect');
    

    useEffect(() => {
        console.log('useEffect hit');
    })

    console.log('after useEffect');

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">

            </div>
        </div>
    )
}

export default EffectFunctional









// *****componentDidMount - run anything just after first render
// *****componentDidUpdate - run every time just after re-render onwards
// *****componentwillUnmount - run when component is going to be unmounted








// Hook

// useState - State
// useEffect - Lifecycle methods
// useContext - Context


