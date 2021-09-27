import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Gamer.css';
const Gamer = (props) => {
    const{name,country,age,img,email,salary}=props.gamer;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="players-container">
            <div className="player">
            <img className="player-img" src={img} alt="" />
             <h3><span className="orange-color">Name:</span> {name}</h3>
             <h3 className="orange-color">Age: {age}</h3>
             <h3 className="orange-color">country: {country}</h3>
             <h3>email: {email}</h3>
             <h3 className="orange-color">Salary: {salary}</h3>
             <button className="btn" onClick={()=> props.handleCartBtn(props.gamer)}>{element}<span className="btn-left-margin">Add to cart</span></button>
            </div>
        </div>
    );
};

export default Gamer;