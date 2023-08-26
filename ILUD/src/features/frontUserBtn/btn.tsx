import { useTransition, useState } from 'react';
import styles from "./styles.module.css";

interface TabButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps>=({ children, isActive, onClick })=> {
  // if (isActive) {
  //   return <b onClick={onClick}>{children}</b>
  // }
  
  return (
    <button className={styles.userBtn1} onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}

