"use client"
import Carousel from "@/features/carousel/carousel"
import { Counter } from "@/features/counter/counter"


  const items = ['/img/aa.jpg','/img/i.jpg','/img/aa.jpg','/img/intermix_o.jpg'];


export default function Home() {
  return (
    <>
      <div className="text text-green-700">BismiLLAHI RAHMAANI RAHIIM</div>
      <div>
        <div className="">
          <Counter/>
        </div>
        <div>
          <Carousel items={items} showButtons={true} />
        </div>
      </div>
      
     
      
    </>
  )
}
