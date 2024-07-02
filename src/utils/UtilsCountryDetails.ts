
import { Country } from "src/context/context";

export const getCountryDetails = (country: Country) => [
  { label: "Native Name", value: country.nativeName ?? "unknown" },
  { label: "Population", value: country.population.toLocaleString() ?? "unknown" },
  { label: "Region", value: country.region ?? "unknown" },
  { label: "Sub Region", value: country.subregion ?? "unknown" },
  { label: "Capital", value: country.capital ?? "unknown" },
  { label: "Top Level Domain", value: country.topLevelDomain.join(", ") ?? "unknown" },
  { label: "Currencies", value: country.currencies[0].name ?? "unknown" },
  { label: "Languages", value: country.languages.map((lang) => lang.name).join(", ") ?? "unknown" },
];
