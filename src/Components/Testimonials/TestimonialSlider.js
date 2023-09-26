
import React, { useState } from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Jane Smith',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    rating: 5, 
  },
  {
    id: 3,
    name: 'Alice Johnson',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque non libero id ante venenatis hendrerit.',
    rating: 3, 
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SliderContainer>
      <SliderContent>
        <h2>Latest Testimonial</h2>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={testimonial.id} active={index === currentTestimonial}>
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
            <StarRating rating={testimonial.rating} />
          </Testimonial>
        ))}
      </SliderContent>
      <SliderControls>
          <button onClick={prevTestimonial}>&#10094;</button>
          <button onClick={nextTestimonial}>&#10095;</button>
        </SliderControls>
    </SliderContainer>
  );
};


const SliderContainer = styled.div`
  background : url('https://neighborhood.swiftideas.net/wp-content/uploads/2013/06/ff_rp_bkg2.png');
  background-repeat: repeat;
    background-position: center top;
    background-size: auto;
    background-color : #FFFFFF;
  width: 100%;
  margin: 0 auto;
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  ${'' /* padding : 10px 50px ; */}
`;

const Testimonial = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const TestimonialContent = styled.p`
  font-size: 1.2rem;
`;

const TestimonialAuthor = styled.p`
  font-style: italic;
  margin-top: 1rem;
`;

const SliderControls = styled.div`
     display: flex;
    justify-content: space-between; 
    margin-top: 1rem;

     button {
       background-color : transparent ;
      color: #000;
      border: none;
     cursor: pointer;

   }
`;

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star key={i} filled={i <= rating}>
        ★
      </Star>
    );
  }
  return <RatingWrapper>{stars}</RatingWrapper>;
};

const RatingWrapper = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? '#FFD700' : '#ccc')};
  font-size: 1.5rem;

`;

export default TestimonialSlider;
