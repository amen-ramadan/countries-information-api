// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Card from "./Card.js";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/context";

export default function CardSection() {
  const { countries, loading } = useCountryContext();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-10 flex flex-col gap-10 items-center">
      {countries.map((card, index) => (
        <Link to={`/details/${card.name}`} key={index}>
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
