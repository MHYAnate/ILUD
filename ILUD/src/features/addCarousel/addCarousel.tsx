import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface CarouselProps {
	items: {
		id: number;
		title: string;
		img: string;
	}[]; // An array of items to display in the carousel
}

const AdCarousel: React.FC<CarouselProps> = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.parent}>
			<div className={styles.titleCard}>
        <span className={styles.titleSpan}>{items[activeIndex].title}</span>
      </div>
      <div className={styles.mainCard}>
        <img src={items[activeIndex].img}/>
      </div>
		</div>
	);
};

export default AdCarousel;
