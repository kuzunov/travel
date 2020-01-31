import React, { useState } from "react";
import Fetch from "./Fetch";
import { GET_COUNTRYDETAILS } from "./Queries.jsx";
import { List } from "tabler-react";

function CountryDetails(countryCode) {
  const [currentCountry, setCountry] = useState({
    country: { code: "n/a", name: "Choose", languages: [] }
  });
  const queryVars = { variables: { code: countryCode.countryCode } };
  let countryData = Fetch(GET_COUNTRYDETAILS, queryVars);
  let condition = countryData !== "l" && countryData !== "r";
  if (condition) {
    if (
      currentCountry.country.name === "Choose" ||
      countryData.country.name !== currentCountry.country.name
    )
      setCountry(countryData);
  }
  return (
    <List.Group>
      <List.GroupItem>Name: {currentCountry.country.name}</List.GroupItem>
      <List.GroupItem icon="at-sign">
        {" "}
        {currentCountry.country.native}
      </List.GroupItem>
      <List.GroupItem icon="phone-outgoing">
        +{currentCountry.country.phone}
      </List.GroupItem>
      <List.GroupItem icon="dollar-sign">
        {" "}
        {currentCountry.country.currency}
      </List.GroupItem>
      <List.GroupItem>
        <i class={"flag flag-" + currentCountry.country.code.toLowerCase()}></i>
      </List.GroupItem>
      {currentCountry.country.languages.map(l => (
        <List.GroupItem icon="globe">{l.name}</List.GroupItem>
      ))}
    </List.Group>
  );
}
export default CountryDetails;
