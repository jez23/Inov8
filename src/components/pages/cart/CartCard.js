import React from 'react';

const CartCard = ({ product }) => {
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
        </div>
    )
}

export default CartCard;