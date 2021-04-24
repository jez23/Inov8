import React, { useContext } from 'react';

import Context from '../../../contexts/Context';

import Template3366 from '../../Template3366';
import FilterProducts from './FilterProducts';
import Products from './Products';
import Product from './Product';

const Filter = () => {

    const {
        showProduct, 
        setShowProduct,
    } = useContext(Context);

    return (
        <Template3366 
            col1={<FilterProducts />}
            col2={showProduct? <Product />: <Products />}
        />
    )
}

export default Filter;