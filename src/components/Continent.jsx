import React from "react";
//import Fetch from "./Fetch";
//import { GET_CONTINENTS } from "./Queries.jsx";

function Continent(props) {
  return (
    <button onClick={() => props.listCountries(props.countries)}>
      Name: {props.name}
    </button>
  );
}
export default Continent;
