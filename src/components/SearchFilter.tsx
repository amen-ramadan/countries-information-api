import { useEffect, useState } from "react";
import { Country, useCountryContext } from "../context/context";
import { Link } from "react-router-dom";

export default function SearchFilter({ search }: { search: string }) {
  const { countries } = useCountryContext();
  const [filterCountries, setFilterCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (search.length > 0) {
      const result: Country[] = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterCountries(result);
    }
  }, [countries, search]);

  return (
    <>
      {search ? (
        <ul className="absolute w-full bg-white border mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {filterCountries.map((country) => (
            <Link to={`/details/${country.name}`}>
              <li key={country.name} className="p-2 hover:bg-gray-100">
                {country.name}
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}
