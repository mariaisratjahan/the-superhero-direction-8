import React from 'react';
import './Sidepart.css';
const Sidepart = (props) => {
    console.log(props);
    const {countingPlayers}=props;
    let total=0;
    for(const eachPlayer of countingPlayers ){
        total=total+eachPlayer.salary;

    }
   
    return (
        <div>
            <div className="sidebar">
                <h2><span className="pink-color">Counting Gamer's : </span>{props.countingPlayers.length}</h2>
                <p><span className="pink-color">Total Cost : </span>{total}</p>
                <p>{props.countingPlayers.name}</p>
            </div>
        </div>
    );
};

export default Sidepart;