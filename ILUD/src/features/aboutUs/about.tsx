import { useState, useTransition } from 'react';
import {TabButton} from './btn';
import AboutTab from './abtUs';
import { Services } from '../addCarousel/data';
import styles from "./styles.module.css";



export default function AboutContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('');

  function selectTab(nextTab:string) {
    startTransition(() => {
      setTab(nextTab);      
    });
  } ;

  return (
    <>
      <TabButton 
        onClick={() =>tab === 'about' ? selectTab(''):selectTab('about')}
      >
        <div className={styles.tabBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.abtSvg}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>

        <span className={styles.span}>About_Us</span>
        </div>
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab Services={Services} />}
    </>
  );
}
