import { useState, useTransition } from 'react';
import {TabButton} from './btn';
import Existing from './existing';
import New from './new';
import styles from "./styles.module.css";



export default function UserBtn() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('');

  function selectTab(nextTab:string) {
    startTransition(() => {
      setTab(nextTab);      
    });
  } ;

  const [btnVisible, setBtnVisible] = useState(false);
  const handleToggleBtn = () => {
		setBtnVisible((prevBtnVisible) => !prevBtnVisible);
	};
  return (
    <>
      <div className={styles.caseContainer}>
        <div className={styles.case}>
          {tab === 'Existing' && <Existing />}
        </div>
        <div className={styles.case}>
          {tab === 'New' && <New />}
        </div>
      </div>
      <div className={styles.userBtnContainer}>
        <div className={tab === 'Existing'?styles.userBtnWrapper1:styles.userBtnWrapper2}>
          <TabButton
            onClick={() =>tab === 'Existing' ? selectTab(''):selectTab('Existing')}
          >
            <span className={tab === 'Existing'?styles.tabSpan2:styles.tabSpan1}>
            Existing_User's
           </span>
          </TabButton>
        </div>
        <div className={tab === 'New'?styles.userBtnWrapper1:styles.userBtnWrapper2}>
          <TabButton
            onClick={() =>tab === 'New' ? selectTab(''):selectTab('New')}
          >
             <span className={tab === 'New'?styles.tabSpan2:styles.tabSpan1}>
              New_User's
            </span>
          </TabButton>
        </div>
      </div>
    </>
  );
}
