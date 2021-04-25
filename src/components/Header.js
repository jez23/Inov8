import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom'; 

import Context from '../contexts/Context';

const Header = () => {

    const {
        cart
    } = useContext(Context);

    const [numInCart, setNumInCart ] = useState(null);

    useEffect(() => {
    const numCartItems = () => {
        const num = cart.reduce((acc, cur) => {
            return acc + cur.quantity;
        }, 0);

        setNumInCart(num);
    }
    numCartItems();
}, [cart])

console.log(77777,  cart)
    return (

        <section className="header">
            <div className="logo"><a href="https://www.inov-8.com/" target="_blank" rel="noreferrer"><img src="https://www.inov-8.com/static/version1617721401/frontend/Nublue/uk/en_GB/images/logo.svg" alt="Inov-8 Logo"/></a></div>
            <div className="nav">
                <ul>
                    <li><Link to="">Men</Link></li>
                    <li><Link to="">Women</Link></li>
                    <li><Link to="">Kids</Link></li>
                    <li><Link to="">Collections</Link></li>
                    <li><Link to="">G-Fly</Link></li>
                    <li><Link to="">Inspiration</Link></li>
                    <li><Link to="">Sustainability</Link></li>
                    <li><Link to="">Outlet</Link></li>
                </ul>
            </div>
            <div className="basket">
                <div className="basket__search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="basket__account">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                </div>
                <div className="basket__basket">
                   
                   
                    <div className="count_container">
                    <Link to="/cart" onClick={() =>  window.scrollTo(0, 0)}><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    {numInCart > 0? <div className="basket__basket__count">
                        <span>{numInCart}</span>
                    </div>: null}
                    
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;