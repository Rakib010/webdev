import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  /*  console.log(handleVisitedCountry); */

  //
  /*  const passWithParams = () => {
    handleVisitedCountry(country);
  }; */

  return (
    <div className={`country ${visited && `visited`}`}>
      <img src={flags.png}></img>
      <h2>Name:{name.common}</h2>
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>
        <small>Code:{cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button className="btn" onClick={handleVisited}>
        {visited ? "visited" : "Going"}
      </button>
      {visited && "I have visited this country"}
      <hr />
      {/* Country details transfer data */}
      <CountryDetail>
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      </CountryDetail>
    </div>
  );
};

export default Country;
