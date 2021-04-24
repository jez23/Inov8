import React, { useContext } from 'react';

import Context from '../contexts/Context';

const RecommendCard = ({product}) => {

    const { setChosenProduct,
        showProduct, 
        setShowProduct } = useContext(Context);

    const cardClicked = () => {
        window.scrollTo(0, 0);
        setChosenProduct(product);
        setShowProduct(true);
    }
    return (
        <div className="recommendCard" onClick={() => cardClicked()}>
            <div className="recommendCard__image">
                <img src={product.photos[0]} alt={product.title}/>
            </div>
            <div className="recommendCard__title">
                <h4>{product.title}</h4>
            </div>
        </div>
    )
}

export default RecommendCard;