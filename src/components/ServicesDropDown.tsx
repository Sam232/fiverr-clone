import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ServicesDropDownProps } from "@/types/HeaderTypes";

const ServicesDropDown = ({ values, navbarRef }: ServicesDropDownProps) => {
    const targetElement = useRef(null);
    const [ position, setPosition ] = useState("");

    useEffect(() => {
        const handleIntersection = (entries: any, _: any) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // The element is visible
                const visibleWidth = entry.intersectionRect.width;
                console.log('Element is fully or partially visible');
                console.log('Visible width:', entry.intersectionRect.width);
                if (visibleWidth < 988 && visibleWidth >= 700) {
                  setPosition("duration-200 -right-96");
                } else if (visibleWidth < 988 && visibleWidth >= 500) {
                  setPosition("duration-200 right-0");
                } else if (visibleWidth < 988 && visibleWidth >= 1) {
                  setPosition("duration-200 -right-10");
                }
              } else {
                // The element is not visible
                console.log('Element is hidden');
              }
            });
          };
      
          // Create an Intersection Observer
          const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
      
          // Start observing the target element
          if (targetElement.current) {
            observer.observe(targetElement.current);
          }
      
          // Cleanup when the component unmounts
          return () => {
            observer.disconnect();
          };
    }, []);

    return (
        <div ref={targetElement} className={`hidden ${position} group-hover:flex group-hover:bg-white group-hover:justify-between gap-x-12 w-[988px] absolute mt-7 p-5`}>
            {
                values.length > 0 && values.map((value, index) => (
                    <div className="flex flex-col gap-y-4" key={index}>
                        <h3 className="font-semibold hover:cursor-default">{value.description}</h3>
                        {
                            value.services.length > 0 && value.services.map((value, index) => (
                                <Link href={value.link} key={index}>{value.name}</Link>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default ServicesDropDown;