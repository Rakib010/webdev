
// props die sob gula eksathe nie then discgudfaj kora jay
const CountryData = (props) => {
  const { country, handleVisitedCountry, handleVisitedFlags } = props;
  return (
    <div>
      <p>
        <small>{country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
