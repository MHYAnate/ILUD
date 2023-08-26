import React, { memo } from "react";
import styles from "./styles.module.css";
import { useState, useTransition } from "react";
import { TabButton } from "./inBtn";
import Passcode from "../passcode/passcode";
import Number from "../number/number";

interface post {
  index: number;
}
const NewClient = memo(function New() {
	let items = [];

	for (let i = 0; i < 1; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

	return <ul className={styles.newClientUser}>{items}</ul>;
});

const SlowPost: React.FC<post> = () => {
	let startTime = performance.now();

	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms per item to emulate extremely slow code
	}

	return (
		<li className={styles.newClientUserIn}>
			<div className={styles.userSvg}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className={styles.svg}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
					/>
				</svg>
			</div>
      <div className={styles.overFlow}>
      <div className={styles.numberCover}>
        <span>Client Mobile_Phone Number</span>
				<Number />
			</div>
			<div className={styles.passCodeCover}>
      <span>Client PassCode</span>
				<Passcode />
			</div>
      </div>
      <div className={styles.logInCover}>
        <button className={styles.logIn}>Link_Up</button>
      </div>
		</li>
	);
};

export default NewClient;
