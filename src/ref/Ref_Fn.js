import React, {useRef} from 'react';

const Ref_Fn = () => {
    const nameref = useRef();
    const ageref = useRef();
    const nameref2 = useRef();
    const ageref2 = useRef();

    const registerFunction = () => {
        let name = nameref.current.value;
        let age = ageref.current.value;
        console.log('form button clicked.', name, age);
        nameref2.current.innerHTML = name;
        ageref2.current.innerHTML = age;
    }
    return (
        <div className="row bg-info bg-opacity-50">
            <div className="col-12">

                <h2>Ref</h2>

                Name - <input type="text" id="name" ref={nameref}/>
                <br></br>
                Age - <input type="text" id="age" ref={ageref}/>
                <br></br>
                <button onClick={registerFunction}>Register Ref</button>
                <br></br><br></br>
                Name - <h3 ref={nameref2}></h3><br></br>
                Age - <h3 ref={ageref2}></h3>

            </div>
        </div>
    )
}

export default Ref_Fn
