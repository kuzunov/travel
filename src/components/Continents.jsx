import React from "react";
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
  //const [c, setContinents] = useState(contCodes);
  const { continents } = Fetch(GET_CONTINENTS);
  //setContinents(continents);
  console.log(continents);
  //setContinents(continents);
  // console.log(continents);

  //continents = .continents;
  return (
    <React.Fragment>
      {continents.map(con => (
        <Continent
          name={con.name}
          listCountries={props.listCountries}
          countries={con.countries}
        />
      ))}
    </React.Fragment>
  );
  // const continent = Fetch(params);
  // console.log(continent);
  // let { name, countries } = continent;
  // return <p>Name:{name}</p>;
}
export default Continents;
