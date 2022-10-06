import React, { useEffect, useState, useMemo } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const array = ['a', 'b', 'c', 'd', 'e'];
    const [letters, setLetters] = useState(array);

    useEffect(() => {
       console.log('Component re-render'); 
    })

    const displayList = (letters) => {
        console.log('Inside render list.');
        return (
            <div>
                {
                    letters.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </div>
        )
    }

    const renderList = useMemo(() => displayList(letters), [letters]);

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                Count - {count}
                <br></br>
                <button onClick={() => setCount(count + 1)}>Count Update</button>
                

                <br></br>
                <br></br>
                {renderList}
                <button onClick={() => setLetters([...letters, 'f', 'g'])}>Letters Update</button>
                {/* <button onClick={renderList}>Test</button> */}



            </div>
        </div>
    )
}

export default UseMemo;
