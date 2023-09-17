

import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { ProductCartContext } from '../../context/ProductCartContext';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [count, setCount] = useState(0);
  const { state } = useContext(ProductCartContext);
  const { isUserLoggedin, userInfo } = useContext(AuthContext);

  const searchContainerRef = useRef(null); // Create a ref for the search container element
  const shoppingBasketRef = useRef(null)
  const toggleNavbar = () => {
    setIsOpen(prev => !prev);
  };

  const togglesearch = () => {
    setShowSearch(prev => !prev);
  };

  const handleBasket = () => {
    setShowBasket(prev => !prev);
  };

  useEffect(() => {
    const totalQuantity = state.cartitems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCount(totalQuantity);
  }, [state.cartitems]);

  useEffect(() => {
    const closeSearchOnOutsideClick = (e) => {
      if (showSearch && searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    const closeBasketOut = (e) =>{
      if (showBasket && shoppingBasketRef.current && !shoppingBasketRef.current.contains(e.target)) {
        setShowBasket(false);
      }
    }

    document.addEventListener('click', closeSearchOnOutsideClick);
    document.addEventListener('click', closeBasketOut);


    return () => {
      document.removeEventListener('click', closeSearchOnOutsideClick);
      document.removeEventListener('click', closeBasketOut);

    };
  }, [showSearch , showBasket]);

  return (
    <div className='container menu-container py-3 ' >
      <nav className={`nav ${isOpen ? 'open' : ''} sticky`} style={{zIndex : '1'}}>
        <div className='toggle' onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'mobileMenu' : ''}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Features</li>
          <li>Shortcodes</li>
        </ul>
      </nav>

      <div className='flex flex-row space-x-5'>
        <div className='searchContainer' ref={searchContainerRef}>
          <div className='searchIcon' onClick={togglesearch}>
            <SearchIcon style={{ fontSize: '25px' }} />
          </div>
          {showSearch && (
            <div className='searchInput'>
              <input type='text' placeholder='Search' />
            </div>
          )}
        </div>
        <div className='ShoppingContainer' ref={shoppingBasketRef}>
          <div className='ShoppingIcon'>
            <ShoppingBasketIcon style={{ fontSize: '25px' }} onClick={handleBasket} />
            {count}   item
          </div>
          {showBasket &&
            <div className='basketText'>
              <h3 >No items in the bag </h3>
              <button>go to shop</button>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
