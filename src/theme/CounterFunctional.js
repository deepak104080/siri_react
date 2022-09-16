import React,  {useState}  from 'react';

const CounterFunctional = () => {
    const [count, setCount] = useState(0);

    //Destructuring
    //state variable and a function to update that state varibale
    //useState - Hook to create state vriable
    //data type and initial value
    //setCount - Trigger component re-render - js async method

    const increaseFunc = () => {
        console.log('increase button clicked...');
        setCount(count => count + 1);
        console.log(count);
    }

    const decreaseFunc = () => {
        console.log('decrease button clicked...');
        setCount(count => count - 1);
    }

    const resetFunc = () => {
        console.log('reset button clicked...');
        setCount(0);
    }

    return(
        <>
            <div className="row bg-warning bg-opacity-50">
                <div className="col-12">
                    <div>
                        Count - {count}
                    </div>
                    <button className='btn btn-primary' onClick={increaseFunc}>Increase</button>
                    <button className='btn btn-warning' onClick={decreaseFunc}>Decrease</button>
                    <button className='btn btn-danger' onClick={resetFunc}>Reset</button>

                    {/* <button className='btn btn-primary' onClick={() => setCount(count => count + 1)}>Increase</button>
                    <button className='btn btn-warning' onClick={() => setCount(count => count - 1)}>Decrease</button>
                    <button className='btn btn-danger' onClick={() => setCount(0)}>Reset</button> */}
                </div>
            </div>
        </>
    )
}

export default CounterFunctional;