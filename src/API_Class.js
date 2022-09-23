import React from 'react'

class API_Class extends React.Component {
    
    callApi = async () => {
        let response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
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

