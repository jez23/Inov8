import React, { useContext, useState } from 'react';

import Context from '../contexts/Context';

import RecommendCard from './RecommendCard';


const ProductPrefer = () => {

    const { products } = useContext(Context);

    const [recommnendArray, setRecommendArray] = useState(products.slice(0, 3));




    return (
        <div className="prefer">
            <h3>You Might Prefer</h3>

            <div className="recommendations">
            {recommnendArray.map((product, i) => {
                return <RecommendCard product={product} key={`recommendation${i}`}/>
            })}
        </div>
        </div>
    )
}

export default ProductPrefer;
