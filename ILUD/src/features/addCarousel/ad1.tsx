import React, { useState, useEffect, useMemo } from 'react';
import styles from "./styles.module.css";

interface CarouselProps {
  Services: {
    category: string;
    src: string;
    services: {
      id: number;
      name: string;
      src: string;
      link: string;
    }[];
  }[];
}

const InCarousel: React.FC<CarouselProps> = ({ Services }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inneractiveIndex, innersetActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const inhandleNext = () => {
    innersetActiveIndex((prevIndex) =>
      prevIndex === Services[activeIndex].services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const intervalTime = useMemo(() => {
    return 1555 * Services[activeIndex].services.length - 1;
  }, [activeIndex, Services]);

  const inIntervalTime = useMemo(() => {
    return 1500;
  }, [activeIndex, Services]);

  const serviceImage = useMemo(() => {
    return Services[activeIndex].services[inneractiveIndex].src;
  }, [activeIndex, inneractiveIndex, Services]);

  const serviceTitle = useMemo(() => {
    return Services[activeIndex].services[inneractiveIndex].name;
  }, [activeIndex, inneractiveIndex, Services]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, intervalTime );

    return () => clearInterval(interval);
  }, [intervalTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      inhandleNext();
    }, inIntervalTime);

    return () => clearInterval(interval);
  }, [inIntervalTime,[serviceTitle,serviceImage]]);

  return (
		<div className={styles.parent}>
			<div className={styles.titleCard}>
				<div className={styles.bckgrnd}>
				  <span className={styles.topSpan}>Instant Linking Up Directory </span>
        </div>
			</div>
      <div className={styles.mainCard}>
				<div className={styles.cardL} >
					<div>
					  <span className={styles.titleSpan}> {Services[activeIndex].category}</span>
					</div>
          <div className={styles.imgCover1}>
				    <img className={styles.imgL} src={Services[activeIndex].src}/>
          </div>
				</div>
				<div className={styles.cardS} >
					<div >
						<span className={styles.titleSpan}>{Services[activeIndex].services[inneractiveIndex].name} Services</span>
					</div>
					<div className={styles.imgCover}>
            <div className={styles.front}>
              <img object-fit= 'cover'  className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
            </div>
            <div className={styles.back}>
					    <img object-fit= 'cover' className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
            </div>
            <div className={styles.right}>
              <img object-fit= 'cover' className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
            </div>
            <div className={styles.left}>
              <img object-fit= 'cover' className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
            </div>
            <div className={styles.top}>
              <img object-fit= 'cover' className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
            </div>
            <div className={styles.bottom}>
              <img object-fit= 'cover' className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
            </div>
					</div>
				</div>
			
      </div>
		</div>
	);
};
export default InCarousel;
