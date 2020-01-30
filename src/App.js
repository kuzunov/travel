import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Continents from "./components/Continents";
import Countries from "./components/Countries.jsx";

function App() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/"
  });
  const [countries, setCountries] = useState([]);

  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <Continents listCountries={setCountries} />
        <Countries current={countries} />
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
