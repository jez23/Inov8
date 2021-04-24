import React, { useContext } from 'react';

import { Link } from 'react-router-dom'; 

import Context from '../../../contexts/Context';

import CartCard from './CartCard';
import Template7030 from '../../Template7030';

const Cart = () => {

    const {cart} = useContext(Context);
console.log(cart)
    return (

        <div>
            
            <Template7030 
                col1={  <><h2>Your Cart</h2>{cart.length > 0? cart.map(item => <CartCard product={item}/>) : <p>No products in cart</p> }
                <Link to="/" className="btn primary" onClick={() =>   window.scrollTo(0, 0)}>Back</Link></> }
            />               
            <div>
                
            </div>
        </div>
    )
}

export default Cart;