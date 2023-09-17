import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import { ProductCartContext } from '../../context/ProductCartContext';
import './Navbar.css'
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [Count, setCount] = useState(0);
  const { state } = useContext(ProductCartContext);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const { isUserLoggedin, userInfo } = useContext(AuthContext);

  useEffect(() => {
    const totalQuantity = state.cartitems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCount(totalQuantity);
  }, [state.cartitems]);

  return (
    <>
      <nav className=" p-4 sticky " >
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-red-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes style={{color : '#fff'}} /> : <FaBars style={{color : '#fff'}} />}
            </button>
          </div>
          <div className="brand">
            <img src="images/header img/logo-2.svg" alt="logo" />
          </div>
          <div className="hidden md:flex space-x-4 flex-grow justify-center">
            <Link to="/" className="text-white nav-hover">Home</Link>
            <Link to="/products" className="text-white nav-hover ">Products</Link>
            <Link to="/about" className="text-white nav-hover ">About</Link>
            <Link to="/signupform" className="text-white  nav-hover ">SignUpForm</Link>
          </div>
          <div className="flex items-center space-x-4 ">
            {isUserLoggedin ? (
              userInfo?.role === 'Admin' ? <Link to="/admin" className='nav-hover'>Admin</Link> : <Link to="/account" className='nav-hover'>User</Link>
            ) : (
              <Link to="/login" className='nav-hover'>Login</Link>
            )}
            <Link to="/cart" className="text-gray hover:text-red-300">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <FaShoppingCart style={{ fontSize: '18px', color: '#fff' }} />
                {Count > 0 && <span className="cart-count">{Count}</span>}
              </div>
            </Link>
            <div class="search-local" >
              <button className='mx-3'>
                <a href="#"  className='bg-blue-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-400 transition duration-300' >search</a>
              </button>
              <input type="text" placeholder="search"  />

            </div>

          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden text-white">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block text-gray hover:text-red-300"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-gray hover:text-red-300"
                  onClick={toggleMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray hover:text-red-300"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

    </>
  );
}

export default Navbar;
