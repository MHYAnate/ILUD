import { useTransition } from 'react';
import styles from "./styles.module.css";

interface TabButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const UserButton: React.FC<TabButtonProps>=({ children, isActive, onClick })=> {
 
  if (isActive) {
    return <div className={styles.onClick}>{children}</div>
  }
  
  return (
    <button className={styles.unClicked} onClick={() => {
        onClick();
    }}>
      {children}
    </button>
  )
}

