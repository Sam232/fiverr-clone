"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Logo from "./Logo"
import Container from "./Container";
import { NavbarPropsType, NavbarLinkWithIcon } from "@/types/HeaderTypes";
import { ServiceLists } from "@/app/contants";
import ServicesDropDown from "./ServicesDropDown";


const Navbar = ({ bgColour }: NavbarPropsType) => {
  const [ navbarColour, setNavbarColour ] = useState("");
  const [ navbarColourOnScroll, setNavbarColourOnScroll ] = useState("");
  const [ navbarHomeBtnOnScroll, setNavbarHomeBtnOnScroll ] = useState("");
  const [ navbarColourOnScrollOnHover, setNavbarColourOnScrollOnHover ] = useState("");
  const [ navbarLinkWithIconOnScrollOnHover, setNavbarLinkWithIconOnScrollOnHover ] = useState("");
  const [ navbarSignUpBtnOnScroll, setNavbarSignUpBtnOnScroll ] = useState("text-slate-100 hover:bg-green-500");
  const [ enableNavbarSearchBtn, setEnableNavbarSearchBtn ] = useState(false);
  const navbarElementRef = useRef(null);

  const handleNavbarColour = () => {
    if (window.scrollY > 0) {
      setNavbarColour("bg-white");
      setNavbarColourOnScroll("text-gray-500");
      setNavbarHomeBtnOnScroll("text-gray-700");
      setNavbarColourOnScrollOnHover("hover:text-green-500");
      setNavbarLinkWithIconOnScrollOnHover("navLinkWithIcon");
      setNavbarSignUpBtnOnScroll('text-green-500 border-green-500 hover:bg-green-500 hover:text-white');

      if (window.scrollY > 215) {
        setEnableNavbarSearchBtn(true);
      } else {
        setEnableNavbarSearchBtn(false);
      }

    } else {
      setNavbarColour(bgColour);
      setNavbarColourOnScroll("");
      setNavbarHomeBtnOnScroll("");
      setNavbarSignUpBtnOnScroll("text-slate-100 hover:bg-green-500");
      setNavbarColourOnScrollOnHover("");
      setNavbarLinkWithIconOnScrollOnHover("");
      setEnableNavbarSearchBtn(false);
    }
  }

  useEffect(() => {
    handleNavbarColour();
    window.addEventListener("scroll", handleNavbarColour);
    return () => {
      window.removeEventListener("scroll", handleNavbarColour);
    }
  }, [bgColour]);

  const NavbarLinkWithIcon = ({ name, icon }: NavbarLinkWithIcon) => {
    return (
      <Link href={""} className="flex items-center gap-x-[5px]"><span>{name}</span>{icon}</Link>
    );
  }

  const NavbarServiceBorder = () => {
    return <div className="group-hover:border-b-[3px] group-hover:border-green-500 h-2 z-10"></div>
  }

  return (
    <div ref={navbarElementRef} className={`sticky top-0 w-full h-20 ${navbarColour} box-border`}>
      <Container className="flex items-center justify-between h-20">
        <Logo textColour={navbarHomeBtnOnScroll}/>
        {
          enableNavbarSearchBtn && <div className="flex items-center justify-center h-20">
            <div className="border-[1px] border-gray-400 bg-white w-[424px] h-10 flex items-center p-4 rounded-l-sm">
              <input type="text" className=" outline-none w-full" placeholder="What service are you looking for today?" />
            </div>
            <button className="w-[60px] h-10 bg-black flex items-center justify-center rounded-r-sm"><span className="text-white text-xl"><IoIosSearch /></span></button>
          </div>
        }
        <div className="flex items-center h-20 gap-x-3">
          <ul className="flex items-center">
            <li className={`navLinks flex items-center justify-center ${navbarColourOnScroll} ${navbarLinkWithIconOnScrollOnHover} w-32 h-10`}><NavbarLinkWithIcon name="Fiverr Pro" icon={<MdKeyboardArrowDown/>}/></li>
            <li className={`navLinks flex items-center justify-center ${navbarColourOnScroll} ${navbarLinkWithIconOnScrollOnHover} w-32 h-10`}><NavbarLinkWithIcon name="Explore" icon={<MdKeyboardArrowDown/>}/></li>
          </ul>
          <ul className="flex items-center gap-x-5">
            <li className={`navLinks ${navbarColourOnScroll} ${navbarColourOnScrollOnHover}`}><Link href={""} className="flex items-center gap-x-[5px]"><CiGlobe/><span>English</span></Link></li>
            <li className={`navLinks ${navbarColourOnScroll} ${navbarColourOnScrollOnHover}`}><Link href={""}>Become a Seller</Link></li>
            <li className={`navLinks ${navbarColourOnScroll} ${navbarColourOnScrollOnHover}`}><Link href={""}>Sign in</Link></li>
            <li className={`font-semibold text-[15px] border-[1px] py-1 px-4 rounded-md ${navbarSignUpBtnOnScroll}`}><Link href={""}>Join</Link></li>
          </ul>
        </div>
      </Container>
      {
        enableNavbarSearchBtn && <div className="bg-white h-1/2 border-t-[1px] border-gray-200">
          <Container className="h-full">
            <ul className="flex flex-wrap items-center justify-between h-full">
              {
                ServiceLists.length > 0 && ServiceLists.map((value, index) => (
                  <li className=" navbarServices group w-auto" key={index}>
                    <div className="flex flex-col relative">
                      <p className="hover:cursor-pointer">{value.name}</p>
                      <NavbarServiceBorder/>
                      <ServicesDropDown navbarRef={navbarElementRef} values={value.values}/>
                    </div>
                  </li>
                ))
              }
            </ul>
          </Container>
        </div>
      }
    </div>
  )
}

export default Navbar;