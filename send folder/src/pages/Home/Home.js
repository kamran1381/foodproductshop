import React, {useState} from 'react';
import Header from '../../Components/Header/Header';
import Products from '../Products/Products';
import { Link as ScrollLink, Element } from 'react-scroll'; 
import Navbar from '../../Components/Navbar/Navbar';
import './home.css'
import Topseller from '../../Components/topseller/Topseller';
import Footer from '../../Components/Footer/Footer';
export default function Home() {
  return (
    <>
     <Navbar/>
     <header className='header'>
      <Header/>
  
     </header>
    
      <main className='main'>
      <div className='top-seller-items'>
      <Topseller/>
      </div>
      
      </main>

      <footer>
        <Footer/>
      </footer>
    
      
    </>
  );
}
