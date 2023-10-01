import React, { useState  , useRef , useContext , useEffect} from 'react';
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
import TestimonialSlider from '../../Components/Testimonials/TestimonialSlider';
import {SearchQueryContext} from '../../context/SearchQueryContext';




export default function Home() {
  const { SearchQuery } = useContext(SearchQueryContext);
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current && SearchQuery) {
      const content = contentRef.current;
      const regex = new RegExp(`\\b(${SearchQuery})\\b`, 'gi');

      // Clear previous highlights
      content.querySelectorAll('mark').forEach((mark) => {
        const text = document.createTextNode(mark.textContent);
        mark.parentNode.replaceChild(text, mark);
      });

      const walk = (node) => {
        if (node.nodeType === 3) {
          const text = node.textContent;
          const parts = text.split(regex);

          if (parts.length > 1) {
            const fragment = document.createDocumentFragment();
            parts.forEach((part, index) => {
              if (index % 2 === 0) {
                fragment.appendChild(document.createTextNode(part));
              } else {
                const mark = document.createElement('mark');
                mark.style.color = 'yellow';
                mark.appendChild(document.createTextNode(part));
                fragment.appendChild(mark);
              }
            });

            node.parentNode.replaceChild(fragment, node);
          }
        } else if (node.nodeType === 1 && node.childNodes && node.childNodes.length > 0) {
          node.childNodes.forEach(walk);
        }
      };

      walk(content);
    }
  }, [SearchQuery]);
  return (
    <> 
      <div className='home'   ref={contentRef} >
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
                <li><h2 className='font-bold px-3 py-2 text-slate-950 '>FREE INTERNATIONAL SHIPPING! OFFER ENDS MAY 20TH 2013</h2>
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
              <h1 className='seller-title text-lg font-bold '>Latest Article</h1>
              <div class="line"></div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-1.jpeg' alt='' className='rounded-lg  w-full '
                  />
                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood exclusive: Eytys</h2>
                  <span className='hover:text-slate-600 mt-3'>By kyle Bowman</span>
                </div>
              </div>


              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-2.jpeg' alt='' className='rounded-lg  '
                    style={{ width: '320px' }} />

                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood vs Fantastic Man</h2>
                  <span className='hover:text-slate-600 mt-3'>By father astreick</span>
                </div>
              </div>

              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-5.jpeg' alt='' className='rounded-lg  '
                    style={{ width: '273px' }} />

                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood vs Fantastic Man</h2>
                  <span className='hover:text-slate-600 mt-3'>By father astreick</span>
                </div>
              </div>


              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-4.jpeg' alt='' className='rounded-lg  '
                    style={{ width: '273px' }} />

                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood vs Fantastic Man</h2>
                  <span className='hover:text-slate-600 mt-3'>By father astreick</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className='Testimonials mt-3'>
          <TestimonialSlider/>
          </div>
        </main>

         <footer>
          <Footer/>
         </footer>
      </div>

    </>
  );
}
