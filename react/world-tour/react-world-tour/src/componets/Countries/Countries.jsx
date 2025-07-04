import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  /* Add mark visited country */
  const handleVisitedCountry = (country) => {
    console.log("add this country");
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  /* add visited country flag */
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // remove item from an array in a state
  // use filter to select all the elements except the one you want to remove



  return (
    <div>
      <h2>Countries:{countries.length}</h2>
      {/* visited country mark*/}
      <div>
        <h2>Visited countries:{visitedCountries.length}</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* visited country flag */}
      <div className="flag-container">
        {visitedFlags.map((flag) => (
          <img className="flag" src={flag}></img>
        ))}
      </div>
      {/* Display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
