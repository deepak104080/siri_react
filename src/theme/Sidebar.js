import React from "react";

const Sidebar = (props) => {
    const {team_first, team_second} = props;
    return (
        <>
            <div className="col-4">
                <h3>Sidebar</h3>
                {/* <h4>Team 1 - {props.team_first}</h4>
                <h4>Team 2 - {props.team_second}</h4> */}
                <h4>Team 1 - {team_first}</h4>
                <h4>Team 2 - {team_second}</h4>
            </div>
        </>
    )
}

export default Sidebar;