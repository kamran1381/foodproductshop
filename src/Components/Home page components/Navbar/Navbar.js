
import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import { ProductCartContext } from '../../../context/ProductCartContext';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {SearchQueryContext} from '../../../context/SearchQueryContext';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [count, setCount] = useState(0);
  const { state } = useContext(ProductCartContext);
  const { isUserLoggedin, userInfo } = useContext(AuthContext);
  const {SearchQuery , setSearchQuery} = useContext(SearchQueryContext)
  const [scrolled , setscrolled] = useState(false)
  const searchContainerRef = useRef(null); 
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
    const containerElement = removeContainerclass.current; 

   if(offset > 100){
    setscrolled(!scrolled)
    containerElement.classList.remove('container')

   }else{
    setscrolled(scrolled)
    containerElement.classList.add('container'); 

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
    <div className={`container menu-container py-3  bg-white ${scrolled ? 'scrolled' : ''}`} ref={removeContainerclass} style={{zIndex : '1000'}}>
      <nav className={`nav  ${isOpen ? 'open' : ''}`} style={{  position: 'sticky', top: '0' }}>
        <div className='toggle' onClick={toggleNavbar}>
          {isOpen ? <FaTimes  style={{fontSize : '8px'}} /> : <FaBars  />}
        </div>
        <ul className={isOpen ? 'mobileMenu' : ''}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link> 
          <Link to='/products'><li>Shop</li></Link>
          <Link to='/signupform'><li><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">signUp/Login</button>
</li></Link>
          {/* <li>Features</li>
          <li>Shortcodes</li> */}
        </ul>
      </nav>

      <div className='flex flex-row space-x-5'>
        <div className='searchContainer' ref={searchContainerRef}>
          <div className='searchIcon' onClick={togglesearch}>
            <SearchIcon style={{ fontSize: '25px' }} />
          </div>
          {showSearch && (
            <div className='searchInput'>
              <input type='text' placeholder='Search'  value={SearchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
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
