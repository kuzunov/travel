import React from "react";
import Fetch from "./Fetch";
import { GET_COUNTRYDETAILS } from "./Queries.jsx";

function CountryDetails(countryCode) {
  const vars = { variables: { code: countryCode.countryCode } };
  const { country } = Fetch(GET_COUNTRYDETAILS, vars);
  return (
    <p>
      {country.name}
      {country.native}
      {country.phone}
      {country.currency}
      {
        //country.languages.map(l => l.name)}
      }
    </p>
  );
  //} else {
  //   return <p>Choose country</p>;
  // }
}
export default CountryDetails;
