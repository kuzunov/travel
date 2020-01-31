import React, { useState } from "react";
import Continent from "./Continent";
import { GET_CONTINENTS } from "./Queries.jsx";
import Fetch from "./Fetch";

function Continents(props) {
  const [continents, setContinents] = useState({
    continents: [{ name: "Loading", countries: [] }]
  });
  let dataContinents = Fetch(GET_CONTINENTS);
  if (
    dataContinents !== "l" &&
    dataContinents !== "r" &&
    continents.continents[0].name === "Loading"
  ) {
    setContinents(dataContinents);
  }
  return (
    <React.Fragment>
      {continents.continents.map(continent => (
        <Continent
          name={continent.name}
          listCountries={props.listCountries}
          countries={continent.countries}
        />
      ))}
    </React.Fragment>
  );
}
export default Continents;
