import React, { memo } from 'react';
import { useState, useTransition } from 'react';
import {TabButton} from './inBtn';
import styles from "./styles.module.css";
import NewClient from './newClient'
import NewServiceProvider from './newServiceProvider';



const New = memo(function New() {

  let items = [];

    items.push(<SlowPost />);

  return (
    <ul className={styles.newUser}>
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
      {tab === 'Existing' && <NewServiceProvider />}
    </div> 
    <div className={styles.innerCase}>
      {tab === 'New' && <NewClient/>}
    </div> 
  <li className={styles.newUserIn}>
     <div className={tab === 'Existing'?styles.userBtnWrapper1:styles.userBtnWrapper2}>
    <TabButton
        onClick={() =>tab === 'Existing' ? selectTab(''):selectTab('Existing')}
      >
        <span className={tab === 'Existing'?styles.tabSpan2:styles.tabSpan1}>
        New Vendor
        </span>
      </TabButton>
      </div>
      <div className={tab === 'New'?styles.userBtnWrapper1:styles.userBtnWrapper2}>
      <TabButton
        onClick={() =>tab === 'New' ? selectTab(''):selectTab('New')}
      >
        <span className={tab === 'New'?styles.tabSpan2:styles.tabSpan1}>
        New Client
        </span>
      </TabButton>
      </div>
  </li>
  </>
);
}

export default New;