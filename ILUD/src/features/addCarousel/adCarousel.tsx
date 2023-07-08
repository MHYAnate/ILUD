import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment2, increment1 } from './adCarouselSlice'
import { number } from "zod";

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

const AdCarousel: React.FC<CarouselProps>   = ({Services}) => {


	const [activeIndex, setActiveIndex] = useState(0);
	
  
	const handleNexts = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === Services.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrevs = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? Services.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNexts();
		}, 22000);

		return () => clearInterval(interval);
	},[]);

 const inner = Services[activeIndex].services;
 
const [activeIndexInner, setActiveIndexInner] = useState(0);

const state = inner[activeIndexInner];
	const handleNext = () => {
		setActiveIndexInner((prevIndex) =>
			prevIndex === inner.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setActiveIndexInner((prevIndex) =>
			prevIndex === 0 ? inner.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 1500);

		return () => clearInterval(interval);
	});
	return (
		<div className={styles.parent}>
			<div className={styles.titleCard}>
        <span className={styles.titleSpan}>{Services[activeIndex].category}</span>
      </div>
      <div className={styles.mainCard}>
				<div className={styles.cardL} >
				<img className={styles.img} src={Services[activeIndex].src}/>
				</div>
				<div className={styles.cardS} >
					<img className={styles.img} src={state.src}/>
				</div>
			
      </div>
		</div>
	);
};

export default AdCarousel;
