"use client";
import Slider from "react-slick";

interface Props {
  children: React.ReactNode,
  className?: string
}

const Carousel = ({ children, className }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="h-[670px]">
      <Slider {...settings}>
        <div className="w-full h-full bg-green-950">

        </div>
        <div className="w-full h-full bg-yellow-500">

        </div>
      </Slider>
    </div>
  )
}

export default Carousel;