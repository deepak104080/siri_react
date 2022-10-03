import React from "react";

const withFilter = (InputComponent, data) => {
    class OutputComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                tempinput: '',
                orglist: data,
                templist: data
            }
        }

        filterFunc = (event) => {
            console.log(event.target.value);
            let tempArr = this.state.orglist.filter((item) => {
                return item.toLowerCase().indexOf(event.target.value.toLowerCase()) >=0;
            })
            console.log(tempArr);
            this.setState({
                ...this.state,
                templist: tempArr
            })
        }

        componentDidUpdate() {
            console.log('---------', this.state.orglist);
        }

        render() {
          return (
            <>
                <input type="text" onChange={(e) => this.filterFunc(e)}/>
                <InputComponent list = {this.state.templist}/>
            </>
          )
        }
    }
    return OutputComponent;

}

export default withFilter;