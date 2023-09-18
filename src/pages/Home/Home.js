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
import TopRated from '../../Components/topRated/TopRated';
export default function Home() {
  return (
    <>
      <div className='home'>
        <Prenav />
        <Neighbor />

        <header className='header' style={{ zIndex: '0px' }}>
          <Header />

        </header>


        <main className='main '>
          <div className='top-seller-items container'>
            <div className='top-seller-wrapper'>
              <Topseller />
            </div>
          </div>
          <div className='blue-seprator'>
            <div className='blue-list'>
              <ul className='space-x-96'>
                <li><h2>FREE INTERNATIONAL SHIPPING! OFFER ENDS MAY 20TH 2013</h2>
                </li>
                <li><a href="#" class="next round">&#8250;</a></li>
              </ul>
            </div>

          </div>
          <div className='TopRated'>
           <div className='topRated-Wrapper container'>
            <TopRated/>
           </div>
          </div>
        </main>


      </div>

    </>
  );
}
