import React, { useState } from "react";
import Continent from "./Continent";
import { GET_CONTINENTS } from "./Queries.jsx";
import Fetch from "./Fetch";

function Continents(props) {
  // const contCodes = [
  //   { code: "EU" },
  //   { code: "AS" },
  //   { code: "AF" },
  //   { code: "NA" },
  //   { code: "SA" }
  // ];
  const [c, setContinents] = useState({
    continents: [{ name: "Loading", countries: [] }]
  });
  let dataC = Fetch(GET_CONTINENTS);
  if (dataC !== "l" && dataC !== "r" && c.continents[0].name === "Loading") {
    setContinents(dataC);
  }
  return (
    <React.Fragment>
      {c.continents.map(con => (
        <Continent
          name={con.name}
          listCountries={props.listCountries}
          countries={con.countries}
        />
      ))}
    </React.Fragment>
  );
}
export default Continents;
