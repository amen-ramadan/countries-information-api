import { Key } from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/context";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  const { name } = useParams<{ name: string }>();
  const { countries, loading } = useCountryContext();

  if (loading) return <div>Loading...</div>;
  else {
    const item = countries.find((country) => country.name === name);
    // console.log(item);

    return (
      <div className="container mx-auto p-4">
        <Link
          to="/"
          className="inline-flex items-center mb-4 py-2 px-10 rounded shadow-[0_1px_15px_1px_rgba(0,0,0,0.3)] bg-white hover:bg-gray-100"
        >
          <span className="mr-2 text-lg">←</span> Back
        </Link>
        <div className="mt-16 flex flex-col place-items-start">
          <img
            src={item?.flag}
            alt={`${item?.name} flag`}
            className="w-full h-72 object-cover mb-6"
          />
          <h2 className="text-3xl font-bold mb-6 mt-10">{item?.name}</h2>
          <div>
            <span>Native Name:</span> {item?.nativeName}
          </div>
          <div>
            <span>Population:</span> {item?.population.toLocaleString()}
          </div>
          <div>
            <span>Region:</span> {item?.region}
          </div>
          <div>
            <span>Sub Region:</span> {item?.subregion}
          </div>
          <div>
            <span>Capital:</span> {item?.capital}
          </div>
          <div>
            <span>Top Level Domain:</span> {item?.topLevelDomain.join(", ")}
          </div>
          <div>
            <span>Currencies:</span> {item?.currencies[0].name}
          </div>
          <div>
            <span>Languages: </span>
            {item?.languages.map((language: { name: string }) => language.name + ", ")}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
          <p>Border Countries:</p>
          {item?.borders?.length ? (
                item?.borders.map((border: string, index: Key) => (
                  <span
                    key={index}
                    className="border border-gray-300 p-2 rounded-md bg-white"
                  >
                    {border}
                  </span>
                ))
            ) : <span>No borders available</span>}
          </div>
        </div>
      </div>
    );
  }
}
