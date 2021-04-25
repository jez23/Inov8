import React, { useEffect, useState } from 'react';

const ProductInfo = ({chosenProduct}) => {

    const [stars, setStars] = useState([])

    useEffect(() => {
        const numberOfStars = () => {
           const array = new Array(chosenProduct.rating).fill(1);
           while(array.length < 5){
             array.push(0);
           }
           setStars(array)
        }
        numberOfStars();
    }, [chosenProduct]);

    return (
        <>
        <div className="productInfo__title">
            <h3>{chosenProduct.title}</h3>
            <p className="productInfo__price"><strong>£{chosenProduct.price}</strong></p>
            <p className="productInfo__stars">{stars.map((star, i) => star? <i key={`star${i}`} className="fa fa-star" aria-hidden="true"></i>: <i key={`star${i}`} className="fa fa-star-o" aria-hidden="true"></i>)}</p>

            
            <p><strong>Colour</strong>: {chosenProduct.color.map((color, i) => {
                return <span key={`color${i}`}>{`${color} `}</span>
            })}</p>
        </div>
         <div className="productInfo__stats">
            <ul className="productInfo__bullets">
                {chosenProduct.features.map((feature, i) => {
                    return <li key={`feature${i}`}><i className="fa fa-check" aria-hidden="true"></i>{feature}</li>
                })}
            </ul>
            <div className="productInfo__stat">
                {Object.keys(chosenProduct.stats).map((stat, i) => {
                    return (<div key={`stat${i}`}>
                        <h5>{stat}</h5>
                        <div className="productInfo__stat__bar">
                            <div className="productInfo__stat__bar__percent" style={{width: `${chosenProduct.stats[stat] * 10}%`, backgroundColor: '#80d882'}}></div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
        </>
    )
}

export default ProductInfo;
