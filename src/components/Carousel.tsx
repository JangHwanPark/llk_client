import React, {useCallback, useEffect, useState} from 'react';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const originalImage = ['./img/hero01.jpg', './img/hero02.jpg', './img/hero03.jpg'];
  const images = [
    originalImage[originalImage.length - 1],
    ...originalImage,
    originalImage[0]
  ];

  const handleTimeout = useCallback(() => {
    setAnimating(true);
    setIndex(prev => (prev + 1) % images.length);
  }, [images.length])

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout;
    if (!animating) {
      timer = setTimeout(handleTimeout, 5000);
    }

    return () => clearTimeout(timer);
  }, [index, animating, handleTimeout]);

  const handleTransitionEnd = useCallback(() => {
    if (index === images.length - 1) {
      setIndex(0);
    } else if (index === 0) {
      setIndex(images.length - 2);
    }
    setAnimating(false); // 애니메이션 끝
  }, [index, images.length])

  return (
    <div className='carousel-container' onTransitionEnd={handleTransitionEnd}>
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animating ? 'transform 1s ease-in-out' : 'none' // 애니메이션이 없을 때는 transition 적용 제거
          }}>
          <img src={img} alt={`Slide ${idx}`} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
