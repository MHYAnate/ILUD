import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './styles.module.css'



interface CarouselProps {
  items: string[]; // An array of items to display in the carousel
  showButtons?: boolean; // Optional prop to show/hide control buttons
}

const Carousel: React.FC<CarouselProps> = ({ items, showButtons = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      {showButtons && (
        <>
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2" onClick={handlePrev}>
            Previous
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2" onClick={handleNext}>
            Next
          </button>
        </>
      )}
  
      <div className={styles.container}>
      <Image className={styles.img}
      src={items[activeIndex]}
      alt="Picture of the author"
      fill={true}
      style={{objectFit: "contain"}}
       />
      </div>
    </div>
  );
};

export default Carousel;