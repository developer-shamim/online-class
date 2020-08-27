import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
   
    const totalPrice = cart.reduce((total, course) => total + course.price,0);

    const tax = (totalPrice * .15).toFixed();
    const grandTotal = (totalPrice + Number(tax)).toFixed();

    return (
        <div className="cart sticky-top">
             <h5> Enrollment Summary </h5> <br/>

             <b> Courses Ordered: {cart.length}</b> 
             <br/>
             <br/>
             <p>Total Course Fess: {totalPrice} </p>
             <p>VAT: {tax}</p>
              <strong>Total Amount: {grandTotal} </strong>
              <br/>
              <br/>
              <button className= "cart-btn" ><FontAwesomeIcon icon={faShoppingBag} />   Check Out</button>
        </div>
    );
};

export default Cart;