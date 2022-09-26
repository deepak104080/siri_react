import React from 'react'

class API_Class extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    
    callApi = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        let finalData = await response.json();
        console.log(finalData);
        // store finalData in this.state
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return(
            <>
            {/* write jsx part same as API_Functional */}
            </>
        )
    }
}

export default API_Class;


// JsFiddle Link - API Call - https://jsfiddle.net/deepak104080/jnhwpLkg/3/

// HW
// Display data coming from API in JSX