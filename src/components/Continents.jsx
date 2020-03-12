import React, { useState } from "react";
import Continent from "./Continent";
import { GET_CONTINENTS } from "./Queries.jsx";
import { useQuery } from "@apollo/react-hooks";

function Continents(props) {
  const [continents, setContinents] = useState({
    continents: [{ code: "n/a", name: "Loading", countries: [] }]
  });
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (!loading && !error && continents.continents[0].name === "Loading") {
    setContinents(data);
  }
  return (
    <React.Fragment>
      {continents.continents.map(continent => (
        <Continent
          key={continent.code}
          name={continent.name}
          listCountries={props.listCountries}
          countries={continent.countries}
        />
      ))}
    </React.Fragment>
  );
}
export default Continents;
