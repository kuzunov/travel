import React from "react";
import { Card, Button } from "tabler-react";

function Continent(props) {
  return (
    <Button
      color="primary"
      onClick={() => props.listCountries(props.countries)}
    >
      {props.name}
    </Button>
  );
}
export default Continent;
