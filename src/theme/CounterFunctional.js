import React,  {useState}  from 'react';

const CounterFunctional = () => {
    const [count, setCount] = useState(0);

    //Destructuring
    //state variable and a function to update that state varibale
    //useState - Hook to create state vriable
    //data type and initial value

    const increaseFunc = () => {
        console.log('increase button clicked...');
        setCount(count => count + 1);
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
                </div>
            </div>
        </>
    )
}

export default CounterFunctional;