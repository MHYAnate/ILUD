import React, { useState, memo, useTransition } from "react";

import styles from "./styles.module.css";
import { TabButton } from "./aboutBtn";

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
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");
	const [btnVisible1, setBtnVisible1] = useState(false);
	const [btnVisible2, setBtnVisible2] = useState(false);
	const [btnVisible3, setBtnVisible3] = useState(false);

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	const handleToggleBtn1 = () => {
		setBtnVisible1((prevBtnVisible) => !prevBtnVisible);
	};
	const handleToggleBtn2 = () => {
		setBtnVisible2((prevBtnVisible) => !prevBtnVisible);
	};
	const handleToggleBtn3 = () => {
		setBtnVisible3((prevBtnVisible) => !prevBtnVisible);
	};

	let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}

	const autoCategory = Services.find(
		(category) => category.category === "Automotive"
	);

	const maintenanceCategory = Services.find(
		(category) => category.category === "Maintenance"
	);

	const personalCategory = Services.find(
		(category) => category.category === "Personal"
	);

	function renderAutomotiveServices() {
		if (!autoCategory) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return autoCategory.services.map((service) => (
			<div className={styles.renderCover} key={service.id}>
				{/* You can display the service name, image, or any other information you need */}
				<img className={styles.img} src={service.src} alt={service.name} />
				<p>{service.name}</p>
			</div>
		));
	}

	function renderMaintenanceServices() {
		if (!maintenanceCategory) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return maintenanceCategory.services.map((service) => (
			<div className={styles.renderCover} key={service.id}>
				{/* You can display the service name, image, or any other information you need */}
				<img className={styles.img} src={service.src} alt={service.name} />
				<p>{service.name}</p>
			</div>
		));
	}

	function renderPersonalServices() {
		if (!personalCategory) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return personalCategory.services.map((service) => (
			<div className={styles.renderCover} key={service.id}>
				{/* You can display the service name, image, or any other information you need */}
				<img className={styles.img} src={service.src} alt={service.name} />
				<p>{service.name}</p>
			</div>
		));
	}

	return (
		<>
			<p className={styles.aims}>
				{" "}
				Aims at providing clients a seamless linking platform to service
				providers within this categories
			</p>
			<hr />
			<div className={styles.tabCover}>
				<TabButton
					onClick={() =>
						tab === "Automotive" ? selectTab("") : selectTab("Automotive")
					}
				>
					<div onClick={handleToggleBtn1} className={styles.tabHolder}>
						<img
							className={styles.img1}
							src={autoCategory?.src}
							alt={autoCategory?.category}
						/>
						{autoCategory?.category}
						<div className={styles.chevron}>
							{btnVisible1 ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles.svg1}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles.svg1}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							)}
						</div>
					</div>
				</TabButton>
				<div className={styles.tabControl}>
					{tab === "Automotive" && renderAutomotiveServices()}
				</div>

				<TabButton
					onClick={() =>
						tab === "maintenance" ? selectTab("") : selectTab("maintenance")
					}
				>
					<div onClick={handleToggleBtn2} className={styles.tabHolder}>
						<img
							className={styles.img1}
							src={maintenanceCategory?.src}
							alt={maintenanceCategory?.category}
						/>
						{maintenanceCategory?.category}
						<div className={styles.chevron}>
							{btnVisible2 ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles.svg2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles.svg2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							)}
						</div>
					</div>
				</TabButton>
				<div className={styles.tabControl}>
					{tab === "maintenance" && renderMaintenanceServices()}
				</div>

				<TabButton
					onClick={() =>
						tab === "Personal" ? selectTab("") : selectTab("Personal")
					}
				>
					<div onClick={handleToggleBtn3} className={styles.tabHolder}>
						<img
							className={styles.img1}
							src={personalCategory?.src}
							alt={personalCategory?.category}
						/>
						{personalCategory?.category}
						<div className={styles.chevron}>
							{btnVisible3 ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles.svg3}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={styles.svg3}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							)}
						</div>
					</div>
				</TabButton>
				<div className={styles.tabControl}>
					{tab === "Personal" && renderPersonalServices()}
				</div>
			</div>
		</>
	);
};

export default AboutTab;
