import React from "react";
import { Button } from "tabler-react";

function Country(props) {
  return (
    <Button
      pill
      color="secondary"
      onClick={() => props.listInfo(props.country.code)}
    >
      {props.country.name}
    </Button>
  );
}
export default Country;
