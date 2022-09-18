import React from "react";
import products from "./ProductsList";

const Loop = () => {
    const array = ['Tata', 'Hyundai', 'Mercedez', 'BMW', 'Maruti', 'Tesla', 'Toyota']
    return (
        <>
            <div className="row bg-secondary bg-opacity-50">
                <div className="col-12">
                    <ul>
                        {
                            array.map(item => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>





                    <div>----------------------------</div>



                    <ul>
                        {
                            products.map(item => (
                                <li key={item.title}>{item.title}</li>
                            ))
                        }
                    </ul>

                    <div>----------------------------</div>



                    <table className="table">
                        <tbody>
                        {
                            products.map(item => (
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{item.rating.rate}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Loop;