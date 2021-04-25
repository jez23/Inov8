import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom'; 

import Context from '../../../contexts/Context';

import CartCard from './CartCard';
import Template7030 from '../../Template7030';

const Cart = () => {

    const {cart} = useContext(Context);
    const [totalToPay, setTotalToPay ] = useState(null);

    useEffect(() => {
        const total = () => {
            const newArr = [...cart];
            const value = newArr.reduce((acc, cur) => {
                return acc + (cur.price * cur.quantity);
            }, 0)
            setTotalToPay (value);
        } 
        total();
    }, [cart])

    return (

        <div>
            
            <Template7030 
                col1={  <><h2>Your Cart</h2>
                    {cart.length > 0? cart.map((item, i) => <CartCard product={item} index={i}/>) : <p>No products in cart</p> }
                    <div className="total">Total £{totalToPay}</div>
                <Link to="/" className="btn primary" onClick={() =>   window.scrollTo(0, 0)}>Back</Link></> }
            />               
            <div>
                
            </div>
        </div>
    )
}

export default Cart;