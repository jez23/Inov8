import React, { useContext , useState } from 'react';

import Context from '../../../contexts/Context';

const CartCard = ({ product, index }) => {

    const { cart, setCart } = useContext(Context);

    const removeItem = () => {
        const newArr = [...cart];
        if(newArr[index].quantity > 1){
            newArr[index].quantity--
            setCart(newArr)
        } else{
            newArr.splice(index, 1);
            setCart(newArr);
        }
    }

    return (
        <div className="cartCard">
            <div className="cartCard__image">
                <img src={product.photo} alt={product.title} />
            </div>
            <div className="cartCard__title">
                <h3>{product.title}</h3>
                <p>Size {product.size}</p>
                <p>Colour: {product.color}</p>
            </div>
            <div className="cartCard__price">
                <p>Price: £{product.price}</p>
            </div>
            <div className="cartCard__qty">
                <p>Qty: {product.quantity}</p>
            </div>
            <div className="cartCard__total">
                <p>Total: £{product.price * product.quantity}</p>
            </div>
            <div className="cartCard__remove">
                <button className="btn secondary" onClick={() => removeItem()}>Remove</button>
            </div>
        </div>
    )
}

export default CartCard;