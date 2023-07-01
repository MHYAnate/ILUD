"use client"
import Carousel from "@/features/carousel/carousel"
import { Counter } from "@/features/counter/counter"
import { items } from "@/features/carousel/carouselData";
 
  const like = 2;
  const dislike =2;

export default function Home() {
  return (
    <>
      {/* <div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>
        <div className="">
          <Counter/>
        </div> */}
        <div>
          <Carousel items={items} like={like} dislike={dislike} />
        </div>
     
      
     
      
    </>
  )
}
