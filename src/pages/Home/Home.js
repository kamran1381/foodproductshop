import React, { useState  , useRef , useContext , useEffect} from 'react';
// import Header from '../../Components/Header/Header';
import Products from '../Products/Products';
import Header from '../../Components/Home page components/Header/Header'
import FOG from 'vanta/dist/vanta.fog.min'
import './home.css'
import Topseller from '../../Components/Home page components/topseller/Topseller';
import Prenav from '../../Components/Home page components/preNav/Prenav';
import TopRated from '../../Components/Home page components/topRated/TopRated';
import TestimonialSlider from '../../Components/Home page components/Testimonials/TestimonialSlider';
import {SearchQueryContext} from '../../context/SearchQueryContext';

export default function Home() {
  const { SearchQuery } = useContext(SearchQueryContext);
  const contentRef = useRef(null);
  const mainref = useRef(null)
  const [vantaeffect , setvantaeffect] = useState(null)
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
  useEffect(()=>{
    if (!vantaeffect) {
      setvantaeffect(FOG({
        el: mainref.current ,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xf0d0d,
        midtoneColor: 0x6b3430,
        lowlightColor: 0x7070cf ,
        zoom: 2.50

      }))
    }
    return () => {
      if (vantaeffect) {
        vantaeffect.destroy()
      }
    }
  },[vantaeffect])



  return (
    <> 
     <Prenav/>
      <div className='home'   ref={contentRef} >


        <header className='header'>
          <Header />

        </header>


        <main className='main ' ref={mainref} > 
          <div className='top-seller-items container'  >
            <div className='top-seller-wrapper'>
              <Topseller />
            </div>
          </div>
          <div className='blue-seprator'>
            <div className='blue-list'>
              <ul className='space-x-96'>
                <li><h2 className='font-bold px-3 py-2 gradient-text'>FREE INTERNATIONAL SHIPPING! OFFER ENDS MAY 20TH 2013</h2>
                </li>
                <li><a href="#" class="next round">&#8250;</a></li>
              </ul>
            </div>

          </div>
          <div className='TopRated '  >
            <div className='topRated-Wrapper container'>
              <TopRated />
            </div>
          </div>
          <div className='Latest-articles container text-white'>
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
                  <img src='images\products img\item-2.jpeg' alt='' className='rounded-lg  w-full'
                    />

                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood vs Fantastic Man</h2>
                  <span className='hover:text-slate-600 mt-3'>By father astreick</span>
                </div>
              </div>

              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-5.jpeg' alt='' className='rounded-lg  w-full'
                     />

                </div>
                <div className='mt-3 space-y-6 text-left cursor-pointer'>
                  <h2 className='hover:text-slate-600'>Neighborhood vs Fantastic Man</h2>
                  <span className='hover:text-slate-600 mt-3'>By father astreick</span>
                </div>
              </div>


              <div className="grid-group mb-12 mt-3 ">
                <div className="grid-group-image mt-3">
                  <img src='images\products img\item-4.jpeg' alt='' className='rounded-lg  w-full '
                     />

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

         {/* <footer>
          <Footer/>
         </footer> */}


      </div>

    </>
  );
}