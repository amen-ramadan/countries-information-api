import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface CustomDropdown {
  onFilterChange: (value: string) => void;
  filterRegion: string;
}


export default function CustomDropdown({ onFilterChange, filterRegion }: CustomDropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [, setSelectedValue] = useState('Filter by Region');
  const options: string[] = ['every where','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const dropdownRef = useRef<HTMLDivElement>(null); // إضافة مرجع لقائمة dropdown

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onFilterChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="w-2/3 sm:w-1/3 md:w-52 h-[60px] md:mt-0 mt-10 relative">
      <button
        onClick={toggleDropdown}
        className="dark:bg-[#2b3743] dark:text-white w-full h-full text-sm sm:text-md border rounded-md bg-white text-gray-700 shadow-md focus:outline-none border-none flex items-center justify-between px-4"
      >
        {filterRegion}
        {isOpen ? (
          <IoIosArrowUp className="text-gray-500 dark:text-white" />
        ) : (
          <IoIosArrowDown className="text-gray-500 dark:text-white" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute flex flex-col w-full text-left mt-1 bg-white dark:bg-[#2b3743] rounded-md shadow-lg z-10">
          {options.map(option => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer py-1 font-light text-sm hover:bg-gray-100 dark:hover:bg-[#222d39] first:mt-2 last:mb-2 pl-6"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
