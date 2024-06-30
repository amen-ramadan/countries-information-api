

interface CountryDetailProps {
  details: { label: string; value: string | number }[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ details }) => (
  <div>
    {details.map((detail, index) => (
      <div key={index} className="mb-2">
        <span className="font-bold">{detail.label}:</span> {detail.value}
      </div>
    ))}
  </div>
);

export default CountryDetail;
