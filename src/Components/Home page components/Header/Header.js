import React, {useState} from 'react';
import './header.css';
import GallerySlider from '../GallerySlider/GallerySlider';
import image1 from '../../../assets/products img/item-1.jpeg'; 
import image2 from '../../../assets/products img/item-2.jpeg'; 
import image3 from '../../../assets/products img/item-3.jpeg'; 

export default function Header() {
 
  const images = [  { src: image1, title: 'pancakes' ,
   caption : `pancakes are the best  morning meal you will  ever have.
    would you like to try it on our website?` },
  { src: image2, title: 'Burgur and fries'  , caption : 'Burgurs are a tasty typical lunch try it out with us'},
  { src: image3, title: 'egg meal'  , caption : 'eggs and toast is our best seller find out why '}
]
  return (
    <>
     <div className="header-container"> 
      <div className="Gallery-section">
        <GallerySlider images={images} />
      
      </div>


    </div>

    </>
    
  );
}
