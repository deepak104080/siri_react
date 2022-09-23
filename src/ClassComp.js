import React from "react";


class ClassComp extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            show: false,
            timer: 0,
            timerVal: false
        }
        console.log('---constructor is running----');
    }

    componentDidMount() {
        console.log('componentDidMount');
        //start timer
        let timerValLocal = setInterval(() => {
            // this.state.timer = this.state.timer + 1;
            // this.forceUpdate();
            this.setState({
                ...this.state,
                timer: this.state.timer + 1
            })
            console.log('1 second passed.');
        }, 1000);
        this.setState({
            ...this.state,
            timerVal: timerValLocal
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.state.timerVal);
    }

    increaseFn = () => {
        console.log('---------increaseFn');
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        // this.forceUpdate();
        // this.setState({
        //     count: this.state.count + 1,
        //     show: this.state.show
        // })
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    decreaseFn = () => {
        console.log('---------decreaseFn');
        this.setState({
            ...this.state,
            count: this.state.count - 1
        })
    }

    closeTimerFn = () => {
        clearInterval(this.state.timerVal);
    }

    startTimerFn = () => {
        let timerValLocal = setInterval(() => {
            this.setState({
                ...this.state,
                timer: this.state.timer + 1
            })
            console.log('1 second passed.');
        }, 1000);
        this.setState({
            ...this.state,
            timerVal: timerValLocal
        })
    }



    render() {
        console.log('-------------render-----------');
        let a = 5;
        let b = 10;

        return(
            <div className="row bg-warning bg-opacity-50">
                <div className="col-12">
                    <h2>This is a class component</h2>
                    Number = {a+b}
                    <br></br><br></br>
                    Count - {this.state.count}
                    <br></br>
                    <button onClick={this.increaseFn}>Increase</button>
                    <br></br>
                    <button onClick={this.decreaseFn}>Decrease</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4>Time - {this.state.timer}</h4>
                    <button onClick={this.closeTimerFn}>Stop Timer</button>
                    <button onClick={this.startTimerFn}>Start Timer</button>
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

