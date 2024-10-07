import { NavbarOnScrollPropsType } from "@/types/HeaderTypes";

const Logo = ({ textColour }: NavbarOnScrollPropsType) => {
  const logoTextColour = textColour != "" ? textColour : "text-slate-100";
  return (
    <div className="flex items-center h-full">
        <p className={`font-extrabold ${logoTextColour} text-3xl`}>fiverr<span className="text-green-500 font-bold text-4xl">.</span></p>
    </div>
  )
}

export default Logo;