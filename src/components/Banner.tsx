import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Container from "./Container";
import { PopularServicePropsType } from "@/types/HeaderTypes";

interface Props {
  sellerImage: any
}

const PopularService = ({ service }: PopularServicePropsType) => {
  return (
    <span className="border-[1px] border-white rounded-full py-1 px-3 text-white text-sm hover:bg-white hover:text-black hover:cursor-pointer hover:duration-700">{service}</span>
  )
}

const Banner = ({ sellerImage }: Props) => {
  return (
    <div className="h-full">
      <Container className="flex items-center h-full">
        <div className="flex flex-col gap-y-3">
          <p className="bannerDesc">Find the right freelance</p>
          <p className="bannerDesc">service, right away</p>
          <div className="flex items-center mt-5">
            <div className="bg-white w-[560px] h-12 flex items-center p-4 rounded-l-md">
              <input type="text" className="outline-none w-full" placeholder="Search for any service..." />
            </div>
            <button className="w-[60px] h-12 bg-green-500 flex items-center justify-center rounded-r-md"><span className="text-white text-xl"><IoIosSearch /></span></button>
          </div>
          <div className="flex mb- items-center gap-x-2 mt-3">
            <p className="text-white">Popular:</p>
            <PopularService service="Webite Design"/>
            <PopularService service="Wordpress"/>
            <PopularService service="Logo Design"/>
            <PopularService service="AI Services"/>
          </div>
        </div>
        <div>
          <Image src={sellerImage} alt="" className="mb-64 ml-32" width={900}/>
        </div>
      </Container>
    </div>
  )
}

export default Banner;