import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './GallerySlider.css';

const GallerySlider = ({ images }) => {


  return (
    <Carousel showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} className="slider-container"
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: isSelected ? "gray" : "#1e2420",
          display: "inline-block",
          margin: "0 8px",
          cursor: "pointer",
        };

        return (
          <div
            style={defStyle}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          ></div>
        );
      }}
    >
      {images.map((image, index) => (
        <div className="img-overlay text-white" key={index} style={{ backgroundImage: `url(${image.src})` }}>
          <div className="slide-container">
            <div className="slide-content">
              <div className="slide-caption">
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

