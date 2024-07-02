// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Card from "./Card.js";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/context";
import { useEffect, useState } from "react";


interface CardSectionProps {
  filterRegion: string;
}


export default function CardSection({filterRegion}: CardSectionProps) {
  const { countries, loading } = useCountryContext();
  const [filteredCountries, setFilteredCountries] = useState(countries);


  useEffect(() => {
    if (filterRegion === "every where") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(countries.filter((country) => country.region === filterRegion));
    }
  }, [filterRegion, countries]);


  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-10 w-full flex flex-col gap-20 items-center sm:flex-row sm:justify-center sm:items-start sm:flex-wrap">
      {filteredCountries.map((card, index) => (
        <Link to={`/details/${card.name}`} key={index} className=" lg:w-1/4 xl:w-1/5 xs:w-auto w-full max-w-[333px] min-w-[270px]  h-[400px]">
          <Card
            name={card.name}
            population={card.population}
            region={card.region}
            capital={card.capital}
            flag={card.flag}
          />
        </Link>
      ))}
    </div>
  );
}
