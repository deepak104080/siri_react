import React from "react";
import '../bootstrap.css';
import Header from "./Header";
import Menubar from "./Menubar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import CounterFunctional from "./CounterFunctional";

const Root = () => {
    const liveScore = {
        runs: 234,
        overs: 49,
        wickets: 5
    }
    const team1 = 'India';
    const team2 = 'Pakistan';

    return (
        <>
            <div className="container">
                <Header />
                <Menubar />
                <div className="row bg-primary bg-opacity-50">
                    {/* <Sidebar team_first = "India" team_second = "Pakistan"/> */}
                    <Sidebar team_first = {team1} team_second = {team2}/>
                    <Content score = {liveScore} abc={5} def = "liuwaegfw"/>
                </div>
               <Footer />
               <CounterFunctional />
            </div>
        </>
    )
}

export default Root;


//DOM, locaStorage, Global Variable