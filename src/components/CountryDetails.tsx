

interface CountryDetailProps {
  details: { label: string; value: string | number }[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ details }) => (
  <div>
    {details.map((detail, index) => (
      <div key={index} className={`mb-[13px] font-extralight ${index === 5 ? 'mt-12' : ''}`}>
        <span className="font-medium :">{detail.label}:</span> {detail.value}
      </div>
    ))}
  </div>
);

export default CountryDetail;
