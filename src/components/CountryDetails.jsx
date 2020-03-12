import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_COUNTRYDETAILS } from "./Queries.jsx";
import { List } from "tabler-react";

function CountryDetails(country) {
  const [currentCountry, setCountry] = useState({
    country: { code: "n/a", name: "Choose", languages: [] }
  });

  const queryVars = { variables: { code: country.countryCode } };
  const { loading, error, data } = useQuery(GET_COUNTRYDETAILS, queryVars);
  //let countryData = Fetch(GET_COUNTRYDETAILS, queryVars);
  //let condition = countryData !== "l" && countryData !== "r";
  if (!loading && !error) {
    if (data.country.name !== currentCountry.country.name) setCountry(data);
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
        <i
          className={"flag flag-" + currentCountry.country.code.toLowerCase()}
        ></i>
      </List.GroupItem>
      {currentCountry.country.languages.map(l => (
        <List.GroupItem key={l.name} icon="globe">
          {l.name}
        </List.GroupItem>
      ))}
    </List.Group>
  );
}
export default CountryDetails;
