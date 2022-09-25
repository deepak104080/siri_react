import React, { useEffect, useState } from 'react'

const API_Functional = () => {
    const [products, setProducts] = useState([]);

    const callApi = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        let finalData = await response.json();
        console.log(finalData);
        setProducts(finalData);
        //store finalData in state variable
    }

    useEffect(() => {
        callApi();
    },[])

    return (
        <div className="row bg-warning bg-opacity-50">
            <div className="col-12">
                {
                    products.length ?
                    (<table className='table'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Category</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            products && products.map((item, index) => (
                                <tr key={index+'-'+item.title}>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>) : (<div><img src="https://acegif.com/wp-content/uploads/loading-36.gif" width="300" height="auto"/></div>)
                }
            </div>
        </div>
    )
}

export default API_Functional


// JsFiddle Link - API Call - https://jsfiddle.net/deepak104080/jnhwpLkg/3/


// Async JS
// Callback Methods
// Promise
// Async Await


