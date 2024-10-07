'use client';

import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import Banner from "./Banner";
import { seller1, seller2, seller3 } from "@/images";

const Header = () => {
  const [ carouselCounter, setCarouselCounter ] = useState(0);
  const colourLists = ["bg-green-950", "bg-pink-950", "bg-orange-800"];

  const sellerImages = [seller2];
  const [ sellerImage, setSellerImageCounter ]: Array<any> = useState(sellerImages[0]);

  const changeBannerBgColour = () => {
    if (carouselCounter == 2) {
      setCarouselCounter(0);
      // setSellerImageCounter(sellerImages[0]);
    } else {
      setCarouselCounter((carouselCounter) => carouselCounter + 1);
      // setSellerImageCounter(sellerImages[carouselCounter + 1])
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBannerBgColour();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [carouselCounter]);

  return (
    <div>
      <Navbar bgColour={`${colourLists[carouselCounter]} duration-700`} />
      <div className={`${colourLists[carouselCounter]} h-[670px] duration-700`}>
        <Banner sellerImage={sellerImage}/>
      </div>
    </div>
  )
}

export default Header;