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

        <header className='header' style={{ zIndex: '1' }}>
          <Header />

        </header>


        <main className='main ' >
          <div className='top-seller-items container' >
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
              <TopRated />
            </div>
          </div>
          <div className='Latest-articles container'>
            <div class="section">
              <div class="line"></div>
              <h1 className='seller-title text-lg font-bold'>Latest Article</h1>
              <div class="line"></div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-1.jpeg' alt='' className='rounded-lg '  />
                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood exclusive: Eytys</h2>
                  <span className='hover:text-slate-600 mt-3'>By kyle Bowman</span>
                </div>
              </div>


              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-2.jpeg' alt='' className='rounded-lg '   />
                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood vs Fantastic Man</h2>
                  <span className='hover:text-slate-600 mt-3'>By father astreick</span>
                </div>
              </div>
            </div>



          </div>
        </main>


      </div>
    </>
  );
}
