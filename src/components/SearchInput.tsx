import { IoIosSearch } from "react-icons/io";

export default function SearchInput() {
  return (
      <label htmlFor="search" className=" sm:basis-1/2 w-full  flex items-center bg-white sm:ml-14 px-4 py-4 shadow-md rounded-md ">
        <IoIosSearch className="text-xl text-gray-400 ml-4"/>
        <input type="text" name="search" id="search" placeholder= "Search for a country..." className="ml-4 text-sm p-1 outline-none " />
      </label>
  )
}
