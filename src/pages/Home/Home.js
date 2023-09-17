import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Products from '../Products/Products';
import { Link as ScrollLink, Element } from 'react-scroll';
import Navbar from '../../Components/Navbar/Navbar';
import './home.css'
import Topseller from '../../Components/topseller/Topseller';
import Footer from '../../Components/Footer/Footer';
import Prenav from '../../Components/preNav/Prenav';
import Neighbor from '../../Components/neighbor/Neighbor';
export default function Home() {
  return (
    <>
      <div className='home'>
        <Prenav />
        <Neighbor />

        {/* <Navbar/> */}
        <header className='header' style={{ zIndex: '0px' }}>
          <Header />

        </header>


        <main className='main '>
          <div className='top-seller-items container'>
            <div className='top-seller-wrapper'>
              <Topseller />

            </div>
          </div>

        </main>

        {/* <footer>
        <Footer/>
      </footer>
     */}

      </div>

    </>
  );
}
