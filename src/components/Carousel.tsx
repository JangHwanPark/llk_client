import React, {useEffect, useState} from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = ['./img/hero01.jpg', './img/hero02.jpg', './img/hero03.jpg'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index])

  return (
    <div className='carousel-container'>
      {images.map(img => (
        <div key={img} style={{transform: `translateX(-${index * 100}%)`}}>
          <img src={img} alt=""/>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
