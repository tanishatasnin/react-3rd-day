import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
               return (
                              <div className='header'>
                                             <img className='logo' src={logo} alt="" />
                                   <nav>
                              <a href="/shop">Shop</a>
                              <a href="/orders">Order Review</a>
                              <a href="/inventiry">Manage Inventory</a>
                              </nav>                                    
                              <div className='search-field'>
        <input className='search-area'  type="text" />
</div>
   
                              </div>
               );
};

export default Header;