interface CountryDetailProps {
  details: { label: string; value: string | number }[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ details }) => (
  <div className="flex md:flex-row md:justify-between md:items-start  flex-col gap-10 ">
    <div className="md:w-1/2">
      {details.slice(0, 6).map((detail, index) => (
        <div key={index} className={` font-extralight my-1`}>
          <span className="font-medium">{detail.label}:</span> {detail.value}
        </div>
      ))}
    </div>
    <div>
      {details.slice(5).map((detail, index) => (
        <div
          key={index}
          className={`font-extralight my-1`}
        >
          <span className="font-medium">{detail.label}:</span> {detail.value}
        </div>
      ))}
    </div>
  </div>
);

export default CountryDetail;
