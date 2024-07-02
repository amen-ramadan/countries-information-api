import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";


export default function Header() {

  const theme = localStorage.getItem("theme");
  if (theme) {
    document.documentElement.classList.add(theme);
  }
  
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark" ? true : false);
  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    if (isDarkMode) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
}
  return (

    <nav className="py-8 px-8 dark:bg-[#2b3743] dark:text-white bg-[#ffffff] container mx-auto min-w-full flex justify-between items-center shadow-md">
      <h1 className="font-bold text-md sm:text-xl">Where in the world ? </h1>
      <button className="text-center text-sm sm:text-lg flex justify-center items-center" onClick={darkModeHandler}>{ isDarkMode ? <FaMoon /> : <IoMoonOutline />} <span className="ml-2">Dark Mode</span></button>
      </nav>
  )
}
