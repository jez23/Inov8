import React, { useContext } from 'react';

import Context from '../../../contexts/Context';

import ProductImage from '../../ProductImage';
import ProductInfo from '../../ProductInfo';
import ProductSizes from '../../ProductSizes';
import ProductGender from '../../ProductGender';
import ProductPrefer from '../../ProductPrefer';

const Products = () => {

    const { chosenProduct, addToCart, resetAllButton, buttonGroup } = useContext(Context);

    return (
        chosenProduct && <div className="product">
            <div className="product__titleAndClose">
                <div className="product__titleAndClose__title">
                    <h2>We Recommend</h2>
                </div>
                <div className="product__titleAndClose__close">
                    <i className="fa fa-times" aria-hidden="true" onClick={() => resetAllButton(buttonGroup)}></i>
                </div>
            </div>
            <div className="productMeta">
                <ProductImage chosenProduct={chosenProduct}/>
                <ProductInfo chosenProduct={chosenProduct}/>
                <div className="productMeta__size">
                    <ProductSizes chosenProduct={chosenProduct}/>
                    <button className="btn primary" onClick={() => addToCart(chosenProduct)}>Add to cart</button>
                </div>
            </div>
            <ProductGender chosenProduct={chosenProduct}/>
            <div className="productPrefer">
                <ProductPrefer/>
            </div>
        </div>
    )
}

export default Products;