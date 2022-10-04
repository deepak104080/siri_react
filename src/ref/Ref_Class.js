import React from 'react';


class Ref_Class extends React.Component {
    constructor() {
        super();
        this.nameref = React.createRef();
        this.ageref = React.createRef();
        this.nameref2 = React.createRef();
        this.ageref2 = React.createRef();
    }

    registerFunction = () => {
        let name = this.nameref.current.value;
        let age = this.ageref.current.value;
        console.log('form button clicked.', name, age);
        this.nameref2.current.innerHTML = name;
        this.ageref2.current.innerHTML = age;
    }

    render() {
        return (
            <div className="row bg-info bg-opacity-50">
            <div className="col-12">

                <h2>Ref Class</h2>

                Name - <input type="text" id="name" ref={this.nameref}/>
                <br></br>
                Age - <input type="text" id="age" ref={this.ageref}/>
                <br></br>
                <button onClick={this.registerFunction}>Register Ref</button>
                <br></br><br></br>
                Name - <h3 ref={this.nameref2}></h3><br></br>
                Age - <h3 ref={this.ageref2}></h3>

            </div>
        </div>
        )
    }
}

export default Ref_Class
