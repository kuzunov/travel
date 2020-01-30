import React, { useState } from "react";
import Fetch from "./Fetch";
import { GET_COUNTRYDETAILS } from "./Queries.jsx";

function CountryDetails(countryCode) {
  const [cc, setCountry] = useState({ country: { name: "Loading" } });
  const vars = { variables: { code: countryCode.countryCode } };
  let data = Fetch(GET_COUNTRYDETAILS, vars);
  let condition = data !== "l" && data !== "r";
  if (condition) {
    if (cc.country.name === "Loading" || data.country.name !== cc.country.name)
      setCountry(data);
  }
  return (
    <p>
      {cc.country.name}//
      {cc.country.native}//
      {cc.country.phone}//
      {cc.country.currency}//
      {console.log(cc.country.languages)}
    </p>
  );
}
export default CountryDetails;
