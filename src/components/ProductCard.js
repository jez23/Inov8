import React, { useContext, useEffect, useState } from 'react';

import Context from '../contexts/Context';

const ProductCard = ({product}) => {

    const { setChosenProduct,
        showProduct, 
        setShowProduct } = useContext(Context);

    const [stars, setStars] = useState([])
    const cardClicked = () => {
        window.scrollTo(0, 0);
        setChosenProduct(product);
        setShowProduct(true);
    }

    useEffect(() => {
        const numberOfStars = () => {
           const array = new Array(product.rating).fill(1);
           while(array.length < 5){
             array.push(0);
           }
           setStars(array)
        }
        numberOfStars();
    }, [product]);


    return (
        <div className="productCard" onClick={() => cardClicked()}>
            <div className="productCard__image">
                <img src={product.photos[0]} alt={product.title}/>
            </div>
            <div className="productCard__title">
                <h4>{product.title}</h4>
            </div>
            <div className="productCard__rating">
            <p>{stars.map((star, i) => star? <i key={`star${i}`} className="fa fa-star" aria-hidden="true"></i>: <i key={`star${i}`} className="fa fa-star-o" aria-hidden="true"></i>)}</p>
            </div>
            <div className="productCard__description">
            <p>{product.description}</p>
            </div>
            <div className="productCard__color">
                <p>{product.color.length} color</p>
            </div>
            <div className="productCard__price">
                <p className="amount"><strong>£{product.price}</strong></p>
            </div>
        </div>
    )
}

export default ProductCard;