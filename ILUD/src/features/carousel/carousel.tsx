import { useState, useEffect } from 'react';
import styles from './styles.module.css'
import Link from 'next/link'


interface CarouselProps {
  items: { id: number; title: string; contact: string; address: string; img: string; name: string, like: number, dislike: number }[]; // An array of items to display in the carousel
}

const Carousel: React.FC<CarouselProps> = ({ items}) => {
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
        <div className={styles.imgform}>
          <div className={styles.imgcontainer} >
            <img 
              className={styles.img}
              src={items[activeIndex].img}
              alt="Picture"
            />
          </div>
          <button className={styles.linkBtn}>
              <Link className={styles.link} href="">LinkUpDirect</Link>
            </button>
            </div> 
          <div className={styles.form}>
            <span className={styles.header}>{items[activeIndex].title}</span>
            <span className={styles.formSpan}>{items[activeIndex].name}</span>
            <span className={styles.formSpan}>{items[activeIndex].contact}</span>
            <span className={styles.formSpan}>{items[activeIndex].address}</span>
            <div className={styles.carousel_footer} >
             <button className={styles.btn}><span className={styles.btnSpan1}>Like</span> {items[activeIndex].like}</button>
             <button className={styles.btn}> {items[activeIndex].dislike}<span className={styles.btnSpan2}>DisLike</span></button>
         </div>
          </div>
   
        
        
      
      
      </div>
   
  );
};

export default Carousel;