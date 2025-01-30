import CountryData from "../CountryData/CountryData";

const CountryDetail = ({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
}) => {
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* This way ekta component the r ekta componet e value pass kora jay */}
      {/* <CountryData>
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      </CountryData> */}
      {/* another way */}

      {/* <CountryData {...props}></CountryData> */}
    </div>
  );
};

export default CountryDetail;
