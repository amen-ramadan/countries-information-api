import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";


export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (

    <nav className="py-8 px-8 container mx-auto min-w-full flex justify-between items-center ">
      <h1 className="font-bold text-md sm:text-xl">Where in the world ? </h1>
      <button className="text-center text-sm sm:text-lg flex justify-center items-center" onClick={() => setIsDarkMode(!isDarkMode)}>{ isDarkMode ? <FaMoon /> : <IoMoonOutline />} <span className="ml-2">Dark Mode</span></button>
      </nav>
  )
}
