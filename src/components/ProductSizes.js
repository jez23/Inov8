import React, { useContext } from 'react';

import Context from '../contexts/Context';

const ProductSizes = ({chosenProduct}) => {

    const {chosenSize} = useContext(Context);

    return (
        <div>
            <div className="productSize__links">
                <div className="productSize__links__right">
                    <p><u>Size Guide</u></p>
                </div>
                <div className="productSize__links__left">
                    <p><u>Don't have your size?</u></p>
                </div>
            </div>   
            <div className="productSize__table">
                {chosenProduct.sizes.map((size, i) => {
                    return <div key={`size${i}`} className={`${size.status ? 'active' : 'ternary'}`} onClick={() => chosenSize(chosenProduct, size.size, i)}>{size.size}</div>
                })}
            </div>
        </div>
    )
}

export default ProductSizes;
