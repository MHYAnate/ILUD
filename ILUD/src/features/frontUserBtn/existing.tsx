import React, { memo } from 'react';
import { useState, useTransition } from 'react';
import {TabButton} from './inBtn';
import styles from "./styles.module.css";
import ExistingServiceProvider from './existingServiceProvider'
import ExistingClient from './existingClient'

const Existing = memo(function Existing() {

  let items = [];

    items.push(<SlowPost/>);

  return (
    <ul className={styles.existingUser}>
      {items}
    </ul>
  );
});

const  SlowPost: React.FC =()=> {

  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('');

  function selectTab(nextTab:string) {
    startTransition(() => {
      setTab(nextTab);      
    });
  } ;

  let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms per item to emulate extremely slow code
  }

  return (
    <>
    <div className={styles.innerCase}>
      {tab === 'Existing' && <ExistingServiceProvider />}
    </div> 
    <div className={styles.innerCase}>
      {tab === 'New' && <ExistingClient />}
    </div> 
  <li className={styles.existingUserIn}>
  <div className={tab === 'Existing'?styles.userBtnWrapper1:styles.userBtnWrapper2}>
    <TabButton
        onClick={() =>tab === 'Existing' ? selectTab(''):selectTab('Existing')}
      >
        <span className={tab === 'Existing'?styles.tabSpan2:styles.tabSpan1}>
        Existing Vendor
        </span>
      </TabButton>
      </div>
      <div className={tab === 'New'?styles.userBtnWrapper1:styles.userBtnWrapper2}>
      <TabButton
        onClick={() =>tab === 'New' ? selectTab(''):selectTab('New')}
      >
        <span className={tab === 'New'?styles.tabSpan2:styles.tabSpan1}>
        Existing Client 
        </span>
      </TabButton>
      </div>
  </li>
  </>
);
}

export default Existing;