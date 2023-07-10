import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment1 } from './adCarouselSlice'
import { increment2 } from './adCarouselSlice1'
import { number } from "zod";
import { Services } from "./adCarouselData";

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
  
	const activeIndex = useSelector((state: RootState) => state.carousel.value)
	

  const dispatch = useDispatch()
	const dispatch1 = useDispatch()

	
	useEffect(() => {
    const interval = setInterval(() => {
      dispatch(increment1());
    }, 22000);

    return () => clearInterval(interval);
  },[]);

	const [inneractiveIndex, setinnerActiveIndex] = useState(0);
  
	const handleNextinner = () => {
		setinnerActiveIndex((prevIndex) =>
			prevIndex === Services[activeIndex].services.length - 1 ? prevIndex = 0 : prevIndex += 1
		);
	};

	const handlePrevinner = () => {
		setinnerActiveIndex((prevIndex) =>
		prevIndex === Services[activeIndex].services.length - 1 ? prevIndex = 0 : prevIndex += 1
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			try{
				handleNextinner();
			}catch(error){
        
			}
			
		}, 1500);

		return () => clearInterval(interval);
	}, [Services[activeIndex].services[inneractiveIndex]]);


	

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
					<img className={styles.img} src={Services[activeIndex].services[inneractiveIndex].src}/>
				</div>
			
      </div>
		</div>
	);
};

export default AdCarousel;
