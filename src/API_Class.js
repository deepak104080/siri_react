import React from 'react'

class API_Class extends React.Component {
    
    callApi = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        let finalData = await response.json();
        console.log(finalData);
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return(
            <>
            </>
        )
    }
}

export default API_Class;


// JsFiddle Link - API Call - https://jsfiddle.net/deepak104080/jnhwpLkg/3/

// HW
// Display data coming from API in JSX