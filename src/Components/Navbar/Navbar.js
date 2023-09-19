
import React, { useState, useContext, useEffect, useRef } from 'react';
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
  const [scrolled , setscrolled] = useState(false)

  const searchContainerRef = useRef(null); // Create a ref for the search container element
  const shoppingBasketRef = useRef(null);
  const removeContainerclass = useRef(null)
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const togglesearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const handlescroll = () => {
    const offset = window.scrollY;
    const containerElement = removeContainerclass.current; // Get the DOM element

   if(offset > 100){
    setscrolled(!scrolled)
    containerElement.classList.remove('container')
   }else{
    setscrolled(scrolled)
    containerElement.classList.add('container'); // Add the class back when not scrolled

   }
  };

  useEffect(() => {
    const totalQuantity = state.cartitems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCount(totalQuantity);
  }, [state.cartitems]);

  useEffect(() => {
    window.addEventListener('scroll', handlescroll);

    const closeSearchOnOutsideClick = (e) => {
      if (
        showSearch &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };

    const closeBasketOut = (e) => {
      if (
        showBasket &&
        shoppingBasketRef.current &&
        !shoppingBasketRef.current.contains(e.target)
      ) {
        setShowBasket(false);
      }
    };

    document.addEventListener('click', closeSearchOnOutsideClick);
    document.addEventListener('click', closeBasketOut);

    return () => {
      document.removeEventListener('click', closeSearchOnOutsideClick);
      document.removeEventListener('click', closeBasketOut);
    };
  }, [showSearch, showBasket]);

  return (
    <div className={`container menu-container py-3 ${scrolled ? 'scrolled' : ''}`} ref={removeContainerclass}>
      <nav className={`nav ${isOpen ? 'open' : ''}`} style={{ zIndex: '1', position: 'sticky', top: '0' }}>
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
            {count} item
          </div>
          {showBasket && (
            <div className='basketText'>
              <h3>No items in the bag</h3>
              <button>go to shop</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
