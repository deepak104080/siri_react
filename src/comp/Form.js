import React, {useState} from 'react'

const Form = () => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const addCity = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    }

    const addCountry = (event) => {
        console.log(event.target.value);
        setCountry(event.target.value);
    }

    const addAddressFunction = (event) => {
        // console.log(event.target);

        console.log('City', city);
        console.log('Country', country);
    }

  return (
    <div className="row bg-warning bg-opacity-50">
        <div className="col-12">
        <br></br>

                    City - <input type="text" onBlur={addCity}/>
                    <div>City Entered - {city}</div>
                    <br></br>

                    Country - <input type="text" onBlur={addCountry}/>
                    <div>Country Entered - {country}</div>
                    <br></br>


                    
                    <button onClick={addAddressFunction}>Add Address Details</button>
                    <br></br><br></br>
      
        </div>
    </div>
  )
}

export default Form;
