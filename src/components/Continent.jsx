import React from "react";

function Continent(props) {
  return (
    <button onClick={() => props.listCountries(props.countries)}>
      Name: {props.name}
    </button>
  );
}
export default Continent;
