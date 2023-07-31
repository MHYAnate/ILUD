import { useState, useTransition } from 'react';
import {TabButton} from './btn';
import AboutTab from './abtUs';
import { Services } from '../addCarousel/data';



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
        About
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab Services={Services} />}
    </>
  );
}
