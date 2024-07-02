import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchFilter from "./SearchFilter";

export default function SearchInput() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative sm:basis-1/2 w-full">
      <label
        htmlFor="search"
        className=" flex items-center bg-white sm:ml-14 px-4 py-4 shadow-md rounded-md "
      >
        <IoIosSearch className="text-xl text-gray-400 ml-4 font-bold" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          className="ml-4 text-sm p-1 outline-none "
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </label>
      <SearchFilter search={search} />
    </div>
  );
}
