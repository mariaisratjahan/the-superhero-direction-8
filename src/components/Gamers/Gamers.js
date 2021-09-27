import React, { useEffect, useState } from 'react';
import Sidepart from '../Sidepart/Sidepart';
import Gamer from './../Gamer/Gamer';
import './Gamers.css'

const Gamers = () => {
    const [gamers, setGamers]=useState([]);
    const [sidepart, setSidepart]=useState([]);
    useEffect(()=>{
        fetch('./gamers.JSON')
        .then(response => response.json())
        .then(json => setGamers(json))

    },[])
    const handleCartBtn=(gamer)=>{
        const newCart=[...sidepart, gamer];
        setSidepart(newCart);
    }
    
    return (
        <div className="gamers-container">
           <div>
                {
                    gamers.map(gamer=> <Gamer
                        key={gamer.id}
                        gamer={gamer}
                        handleCartBtn={handleCartBtn}
                    ></Gamer>)
                }
           </div>
           <div>
               
              <Sidepart countingPlayers={sidepart}></Sidepart>
              
           </div>
        </div>
    );
};

export default Gamers;