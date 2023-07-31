import React, { memo } from 'react';
import { Services } from '../addCarousel/data';
import styles from "./styles.module.css";

interface CarouselProps {
  Services: {
    category: string;
    src: string;
    services: {
      id: number;
      name: string;
      src: string;
      link: string;
    }[];
  }[];
}
export const  RowList: React.FC<CarouselProps>=memo(({ Services})=> {
  return (
    <div className="RowList">
      {Services.map(service => (
        <>
        <div className={styles.maped} key={service.category}>
          {service.category}
        </div>
        <div className={styles.maped} key={service.category}>

        </div>
        </>
      ))}
    </div>
  );
});