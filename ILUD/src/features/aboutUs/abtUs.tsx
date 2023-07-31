import React, { useState, useEffect, useMemo, memo } from "react";
import { Services } from "../addCarousel/data";
import styles from "./styles.module.css";

interface CarouselProps {
	Services: {
		id: number;
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


const AboutTab: React.FC<CarouselProps> = memo(({ Services }) => {
  
	let items = [];

	for (let i = 1; i < Services.length - 1; i++) {
		items.push(<SlowPost key={i} Services={Services} />);
	}

	return <ul className={styles.lineContainer}>{items}</ul>;

});

const SlowPost: React.FC<CarouselProps> = ({ Services }) => {

  let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}

	function renderServices(services: any) {
		return services.map((service: any) => (
			<div className={styles.renderCover} key={service.name}>
				<img className={styles.img} src={service.src} alt={service.name} />
				<p>{service.name}</p>
			</div>
		));
	}

	return (
		<>
			{Services.map((service) => (

				<li className={styles.line} key={service.id}>
					<div className={styles.maped} key={service.id}>
						{service.category}
						{renderServices(service.services)}
					</div>
				</li>
			))}
		</>
	);
};

export default AboutTab;
