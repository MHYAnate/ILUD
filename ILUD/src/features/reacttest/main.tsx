import { useState, useTransition } from 'react';
import {TabButton} from './reusebutton';
import AboutTab from './abou';
import PostsTab from './post';
import ContactTab from './contact';


export default function TabContainer() {
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
      <TabButton
        onClick={() =>tab === 'posts' ? selectTab(''):selectTab('posts')}
      >
        Posts (slow)
      </TabButton>
      <TabButton
        onClick={() =>tab === 'contact' ? selectTab(''):selectTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      
      {tab === 'about' && <AboutTab />}
      {tab == 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}
