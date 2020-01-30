import React, { useState } from "react";
import CountryDetails from "./CountryDetails";
import Country from "./Country";

function Countries(params) {
  const [filter, setFilter] = useState("");
  const [currCountry, setCountry] = useState("");
  const countries = params.current;

  return (
    <React.Fragment>
      <input
        type="text"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <CountryDetails countryCode={currCountry} />
      {countries
        .filter(function(countries) {
          return countries.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(c => (
          <Country country={c} listInfo={setCountry} />
        ))}
    </React.Fragment>
  );
}
export default Countries;
