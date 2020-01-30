import React from "react";

function Country(props) {
  return (
    <button onClick={() => props.listInfo(props.country.code)}>
      {props.country.name}
    </button>
  );
}
export default Country;
