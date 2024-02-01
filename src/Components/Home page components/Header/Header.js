import React, { useState } from 'react';
import './header.css';
import GallerySlider from '../GallerySlider/GallerySlider';
import image1 from '../../../assets/products img/item-1.jpeg';
import image2 from '../../../assets/products img/item-2.jpeg';
import imag4 from '../../../assets/products img/item-4.jpeg';

export default function Header() {
  const images = [
    { src: image1, title: 'pancakes', caption: `pancakes are the best morning meal you will ever have. would you like to try it on our website?` },
    { src: image2, title: 'Burgur and fries', caption: 'Burgurs are a tasty typical lunch try it out with us' },
    { src: imag4, title: 'egg meal', caption: 'eggs and toast is our best seller find out why ' }
  ];

  // State to track whether the user is scrolling vertically
  const [isScrollingVertically, setIsScrollingVertically] = useState(false);

  // Event handler for touchstart
  const handleTouchStart = () => {
    setIsScrollingVertically(false);
  };

  // Event handler for touchmove
  const handleTouchMove = (event) => {
    if (!isScrollingVertically) {
      const touchStartY = event.touches[0].clientY;
      const touchMoveY = event.touches[0].clientY;
      
      // Determine if the user is scrolling vertically
      if (Math.abs(touchMoveY - touchStartY) > 10) {
        setIsScrollingVertically(true);
      }
    }
  };

  return (
    <div className="header-container " onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} tyle={{zIndex : '-900'}}>
      <div className="Gallery-section">
        <GallerySlider images={images} />
      </div>
    </div>
  );
}
