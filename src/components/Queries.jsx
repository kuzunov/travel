import { gql } from "apollo-boost";

export const GET_CONTINENTS = gql`
  query continents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRYDETAILS = gql`
  query countries($code: String!) {
    country(code: $code) {
      code
      name
      native
      phone
      currency
      languages {
        name
      }
    }
  }
`;
