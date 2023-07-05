import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface CarouselProps {
	items: {
		id: number;
		title: string;
		contact: string;
		address: string;
		img: string;
		name: string;
		like: number;
		dislike: number;
	}[]; // An array of items to display in the carousel
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {

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

	const star = items[activeIndex].like - items[activeIndex].dislike;

	return (
		<div className={styles.parent}>
			<div className={styles.imgform}>
				<div className={styles.imgcontainer}>
					<img
						className={styles.img}
						src={items[activeIndex].img}
						alt="Picture"
					/>
				</div>
				<button className={styles.linkBtn}>
					<Link className={styles.link} href="">
						LinkUpDirect
					</Link>
				</button>
			</div>
			<div className={styles.form}>
				<div className={styles.headsvg}>
					{" "}
					{star}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="gold"
						viewBox="3 0 24 24"
						strokeWidth={1.5}
						stroke="gold"
						className={styles.svg}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
						/>
					</svg>
					<span>{items[activeIndex].title}</span>
				</div>
				<span className={styles.formSpan}>{items[activeIndex].name}</span>
				<span className={styles.formSpan}>{items[activeIndex].contact}</span>
				<span className={styles.formSpan}>{items[activeIndex].address}</span>
				<div className={styles.carousel_footer}>
					<div className={styles.btn}>
						<span className={styles.btnSpan1}>Like</span>{" "}
						{items[activeIndex].like}
					</div>
					<div className={styles.btn1}>
						{" "}
						{items[activeIndex].dislike}
						<span className={styles.btnSpan2}>DisLike</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
