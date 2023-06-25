"use client"
import Carousel from "@/features/carousel/carousel"
import { Counter } from "@/features/counter/counter"


  const items = ['/img/aa.jpg', '/img/i.jpg', '/img/aa.jpg','/img/intermix_o.jpg'];


export default function Home() {
  return (
    <>
      <div>BismiLLAHI RAHMAANI RAHIIM</div>
      <Counter/>
      <Carousel items={items} showButtons={true} />
      
    </>
  )
}
