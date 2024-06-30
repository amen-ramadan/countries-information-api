
import { Country } from "src/context/context";

export const getCountryDetails = (country: Country) => [
  { label: "Native Name", value: country.nativeName },
  { label: "Population", value: country.population.toLocaleString() },
  { label: "Region", value: country.region },
  { label: "Sub Region", value: country.subregion },
  { label: "Capital", value: country.capital },
  { label: "Top Level Domain", value: country.topLevelDomain.join(", ") },
  { label: "Currencies", value: country.currencies[0].name },
  { label: "Languages", value: country.languages.map((lang) => lang.name).join(", ") },
];
