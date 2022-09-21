import React from "react";


class ClassComp extends React.Component {
    // constructor(){
    //     this.state = {}
    // }


    render() {
        let a = 5;
        let b = 10;

        return(
            <div className="row bg-warning bg-opacity-50">
                <div className="col-12">
                    <h2>This is a class component</h2>
                    Number = {a+b}
                </div>
            </div>
        )

    }

}

export default ClassComp;


// no need to create object
// created some pre defined function/methods - lifecycle methods
// also defined the automatic execution sequence/steps

// 3 phases of lifecycle methods
// mounting
// *****constructor
// getDerivedStateFromProps
// *****render
// *****componentDidMount - run anything just after first render



// re-mounting/updating
// getDerivedStateFromProps
// shouldComponentUpdate
// *****render
// getsnapshotbeforeupdate
// *****componentDidUpdate - run every time just after re-render onwards



// unmounting
// *****componentwillUnmount - run when component is going to be unmounted


