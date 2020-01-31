import React, { useState } from "react";
import Fetch from "./Fetch";
import { GET_COUNTRYDETAILS } from "./Queries.jsx";
import { List } from "tabler-react";

function CountryDetails(countryCode) {
  const [cc, setCountry] = useState({
    country: { code: "n/a", name: "Choose", languages: [] }
  });
  const vars = { variables: { code: countryCode.countryCode } };
  let data = Fetch(GET_COUNTRYDETAILS, vars);
  let condition = data !== "l" && data !== "r";
  if (condition) {
    if (cc.country.name === "Choose" || data.country.name !== cc.country.name)
      setCountry(data);
  }
  return (
    <List.Group>
      <List.GroupItem>Name: {cc.country.name}</List.GroupItem>
      <List.GroupItem icon="at-sign"> {cc.country.native}</List.GroupItem>
      <List.GroupItem icon="phone-outgoing">+{cc.country.phone}</List.GroupItem>
      <List.GroupItem icon="dollar-sign"> {cc.country.currency}</List.GroupItem>
      <List.GroupItem>
        <i class={"flag flag-" + cc.country.code.toLowerCase()}></i>
      </List.GroupItem>
      {cc.country.languages.map(l => (
        <List.GroupItem icon="globe">{l.name}</List.GroupItem>
      ))}
    </List.Group>
  );
}
export default CountryDetails;
