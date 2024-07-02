import { Key } from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/context";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../utils/UtilsCountryDetails";
import CountryDetail from "./CountryDetails";

export default function CardDetails() {
  const { name } = useParams<{ name: string }>();
  const { countries, loading } = useCountryContext();

  if (loading) return <div>Loading...</div>;

  const item = countries.find((country) => country.name === name);

  if (!item) return <div>Country not found</div>;

  const details = getCountryDetails(item);

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/"
        className="inline-flex items-center  py-2 px-6 md:px-10 rounded shadow-[0_1px_15px_1px_rgba(0,0,0,0.2)] bg-white hover:bg-gray-100"
      >
        <span className="mr-2 text-lg">←</span> Back
      </Link>
      <div className="mt-16 flex flex-col md:flex-row md:flex-wrap md:gap-8 lg:flex-row lg:flex-wrap lg:gap-16 place-items-start">
        <img
          src={item?.flag}
          alt={`${item?.name} flag`}
          className="size-5/6 sm:size-4/6 md:size-4/12 mx-auto md:mx-0 object-cover mb-6"
        />
        <div className="sm:w-1/2 md:grow lg:grow-0">
          <h2 className="text-3xl font-bold mb-8 mt-10 md:mt-0">{item.name}</h2>
          <div className="grid md:grid-cols-1 ">
            <CountryDetail details={details} />
            <div>
              <p className="font-medium mt-8">Border Countries:</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.borders?.length ? (
                  item.borders.map((border: string, index: Key) => (
                    <span
                      key={index}
                      className="font-extralight py-2 px-10 rounded shadow-[0_1px_15px_1px_rgba(0,0,0,0.1)] bg-white hover:bg-gray-100"
                    >
                      {border}
                    </span>
                  ))
                ) : (
                  <span>No borders available</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
