import React, { useContext } from "react";

import Context from '../contexts/Context';

const ProductGender = ({ chosenProduct }) => {

  const { chooseOppGender } = useContext(Context);

  return (
    <div className="productGender">
        {chosenProduct.gender === "male" ? (
          <div>
            <h5>Womens</h5>
            <div className="productGender__selector" onClick={() => chooseOppGender(chosenProduct.oppGenderId)}>
            <img
              src={`${chosenProduct.photos[0]}`}
              alt={`${chosenProduct.title}`}
            />
            </div>
          </div>
        ) : (
          <div>
            <h5>Mens</h5>
            <div className="productGender__selector" onClick={() => chooseOppGender(chosenProduct.oppGenderId)}>
            <img
              src={`${chosenProduct.photos[0]}`}
              alt={`${chosenProduct.title}`}
            />
            </div>
          </div>
        )}
    </div>
  );
};

export default ProductGender;
