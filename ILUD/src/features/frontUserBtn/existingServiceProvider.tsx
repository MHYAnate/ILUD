import React, { memo } from 'react';
import styles from "./styles.module.css";
import Passcode from "../passcode/passcode";
import Number from "../number/number";
import VendorLogIn from '../forms/vendorLogIn';

interface post {
  index: number;
}
const ExistingServiceProvider = memo(function Existing() {

  let items = [];

	for (let i = 0; i < 1; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <ul className={styles.existingServiceProviderUser}>
      {items}
    </ul>
  );
});

const  SlowPost: React.FC<post> =()=> {
  let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms per item to emulate extremely slow code
  }

  return ( 
  <li className={styles.existingServiceProviderUserIn}>
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
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
			</div>
			<h1 className={styles.logInHeader}>Existing Vendor</h1>
			<VendorLogIn/>
  </li>
);
}

export default ExistingServiceProvider;