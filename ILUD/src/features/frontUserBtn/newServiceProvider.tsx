import React, { memo } from 'react';
import styles from "./styles.module.css";



const NewServiceProvider = memo(function New() {

  let items = [];

    items.push(<SlowPost />);

  return (
    <ul className={styles.newServiceProviderUser}>
      {items}
    </ul>
  );
});

const  SlowPost: React.FC =()=> {
  let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms per item to emulate extremely slow code
  }

  return ( 
  <li className={styles.newServiceProviderUserIn}>
  
  </li>
);
}

export default NewServiceProvider;