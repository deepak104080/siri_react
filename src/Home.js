import React, {Fragment} from "react";

const Home = () => {
    const a = 5;
    const b = 6;
    return(
        <Fragment>
            <h2>Home Page</h2>
            <div>My first react page.</div>
            <div>Sum - {a+b}</div>
        </ Fragment>
    )
}

export default Home;