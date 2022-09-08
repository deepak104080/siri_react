import React from "react";
import '../bootstrap.css';
import Header from "./Header";
import Menubar from "./Menubar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

const Root = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Menubar />
                <div className="row bg-primary bg-opacity-50">
                    <Sidebar /> {/*- col-4*/}
                    <Content /> {/*- col-8*/}
                </div>
               <Footer />
            </div>
        </>
    )
}

export default Root;