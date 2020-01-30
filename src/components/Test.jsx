import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { gql } from "apollo-boost";

function Test() {
  const GET_CONTINENT = gql`
    {
      continent(code: "NA") {
        name
        countries {
          name
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CONTINENT);
  if (loading) return "Loading...";
  if (error) return `Error!`;
  return <React.Fragment>{console.log(data)}</React.Fragment>;
}
export default Test;
