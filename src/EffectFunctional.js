import React, { useEffect, useState } from 'react'

const EffectFunctional = () => {
    const [status, setStatus] = useState(false);
    const [status2, setStatus2] = useState(false);

    // console.log('before useEffect');
    
    // componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('every time render - useEffect hit - componentDidMount + componentDidUpdate');
    })

    // componentDidMount
    useEffect(() => {
        console.log('one time render - useEffect hit - componentDidMount');
    },[])

    // componentDidMount + update on status variable
    useEffect(() => {
        console.log('status render - useEffect hit - componentDidMount + update on status variable');
    }, [status])

    // componentDidMount + update on status variable
    useEffect(() => {
        console.log('status 2 render - useEffect hit 2 - componentDidMount + update on status variable');
    }, [status2])

    // componentwillUnmount
    useEffect(() => {
        return () => {
            console.log('componentwillUnmount');
        }
    }, [])


    // console.log('after useEffect');

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                <button onClick={() => setStatus(status => !status)}>Test Re-render</button>
                <button onClick={() => setStatus2(status2 => !status2)}>Test Re-render 2</button>
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


