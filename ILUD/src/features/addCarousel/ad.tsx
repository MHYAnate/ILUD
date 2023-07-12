import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import React from 'react'

interface CarouselProps {
	Services: {
		category:string;
		src:string;
		services: {
		id: number;
		name: string; 
		src: string; 
		link: string;
		}[]
	}[]; // An array of services to display in the carousel,
}

const Ad: React.FC<CarouselProps>   = ({Services}) => {
  
	
  const [activeIndex, setActiveIndex] = useState(0);
  
	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === Services.length - 1 ? 0 : prevIndex + 1
		);
	};


	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 21000);

		return () => clearInterval(interval);
	}, []);

  const [inneractiveIndex, innersetActiveIndex] = useState(0);
  
	const inhandleNext = () => {
		try {
		innersetActiveIndex((prevIndex) =>
		   prevIndex = (prevIndex + 1) % Services[activeIndex].services.length
		);
	    }catch(error){
				Services[activeIndex].services.length===0
			}
	};

	useEffect(() => {
		try{
		const interval = setInterval(() => {
			inhandleNext();
		}, 1500);

		return () => clearInterval(interval);
	}catch(error){
		const interval = setInterval(() => {
			inhandleNext();
		}, 1500);

		return () => clearInterval(interval);
	}
	}, [Services[activeIndex].services.length]);

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
				    <img className={styles.img} src={Services[activeIndex].src}/>
          </div>
				</div>
				<div className={styles.cardS} >
					<div >
						<span className={styles.titleSpan}>{Services[activeIndex].services[inneractiveIndex].name} Services</span>
					</div>
					<div className={styles.imgCover}>
					  <img className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
					</div>
				</div>
			
      </div>
		</div>
	);
};

export default Ad;
