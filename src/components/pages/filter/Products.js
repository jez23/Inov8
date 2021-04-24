import React, { useContext } from 'react';

import ProductCard from '../../ProductCard';
import Context from '../../../contexts/Context';

const Products = () => {

    const {
        products
    } = useContext(Context);

    return (
        <div className="products">
            {products.map((product, i) => {
                return <ProductCard product={product} key={`product${i}`}/>
            })}
        </div>
    )
}

export default Products;