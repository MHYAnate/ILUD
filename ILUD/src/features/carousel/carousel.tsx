import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import Link from 'next/link'


interface CarouselProps {
  items: string[]; // An array of items to display in the carousel
  like: number
  dislike: number
}

const Carousel: React.FC<CarouselProps> = ({ items,like,dislike}) => {
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
    <div className={styles.parent}>
    <div className={styles.main}>
        <div className={styles.imgform}>
          <div className={styles.imgcontainer} >
            <img 
              className={styles.img}
              src={items[activeIndex]}
              alt="Picture"
            />
          </div>
          <form className={styles.form}>
            <input type="text" id="fname" name="fname">{}</input>
            <input type="text" id="fname" name="fname">{}</input>
            <input type="text" id="fname" name="fname">{}</input>
            <input type="text" id="fname" name="fname">{}</input>
          </form>
        </div>
          <div className={styles.carousel_footer} >
            <Link href="">LinkUpDirect</Link>
            <div>
              <button className={styles.btn}>{like}</button>
              <button className={styles.btn}>{dislike}</button>
            </div>
          </div>
        
      
      </div>
      </div>
   
  );
};

export default Carousel;