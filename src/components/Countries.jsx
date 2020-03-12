import React, { useState } from "react";
import CountryDetails from "./CountryDetails";
import Country from "./Country";
import { Form, Button } from "tabler-react";

function Countries(params) {
  const [filter, setFilter] = useState("");
  const [currCountry, setCountry] = useState("");
  const countries = params.current;
  return (
    <React.Fragment>
      <Form.Input
        type="text"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <Button.List className="countries">
        {countries
          .filter(function(countries) {
            return countries.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(country => (
            <Country
              key={country.code}
              country={country}
              listInfo={setCountry}
            />
          ))}
      </Button.List>
      <CountryDetails countryCode={currCountry} />
    </React.Fragment>
  );
}
export default Countries;
