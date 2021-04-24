import React from 'react';

const ProductImage = ({chosenProduct}) => {
    return (
        <div className="productImage">
            <img src={chosenProduct.photos[0]} alt={chosenProduct.title} />
        </div>
    )
}

export default ProductImage;
