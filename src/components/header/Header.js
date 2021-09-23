import React from 'react';
import logo from  '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} />
           <nav className='nav'>
            <a>Shop</a>
            <a>Order Review</a>
            <a>Manage Inventory here</a>
           </nav>
        </div>
    );
};

export default Header;