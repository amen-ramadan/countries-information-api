import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface CustomDropdown {
  onFilterChange: (value: string) => void;
}


export default function CustomDropdown({ onFilterChange }: CustomDropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Filter by Region');
  const options: string[] = ['every where','Africa', 'America', 'Asia', 'Europe', 'Oceania'];
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
    <div ref={dropdownRef} className="sm:basis-1/4 w-2/4 h-[60px] sm:mt-0 mt-12 relative">
      <button
        onClick={toggleDropdown}
        className="w-full h-full text-sm sm:text-md border rounded-md bg-white text-gray-700 shadow-md focus:outline-none flex items-center justify-between px-4"
      >
        {selectedValue}
        {isOpen ? (
          <IoIosArrowUp className="text-gray-500" />
        ) : (
          <IoIosArrowDown className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute flex flex-col w-full text-left mt-1 bg-white border rounded-md shadow-lg z-10">
          {options.map(option => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer py-2 hover:bg-gray-100 first:mt-4 last:mb-4 pl-6"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
