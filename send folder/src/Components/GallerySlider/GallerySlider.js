import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './GallerySlider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GallerySlider = ({ images }) => {


  return (
    <Carousel showThumbs={false} showStatus={false} className="slider-container">
      {images.map((image, index) => (
        <div className="img-overlay" key={index}>
          <div className="slide-container">
            <div className="slide-content">
              <img src={image.src} alt={`Image ${index}`} className="img-size text-center" />
              <div className="slide-caption ">
                <h1>{image.title}</h1>
                <span>{image.caption}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default GallerySlider;
