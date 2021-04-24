import React from 'react';

import { Link } from 'react-router-dom'; 

const Header = () => {
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
                    <Link to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                </div>
            </div>
        </section>
    )
}

export default Header;