import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Continents from "./components/Continents";
import Countries from "./components/Countries.jsx";

import "tabler-react/dist/Tabler.css";
import "./styles.css";
import { Card } from "tabler-react";

function App() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/"
  });
  const [countries, setCountries] = useState([]);

  return (
    <ApolloProvider client={client}>
      <Card>
        <Card.Header>
          <Continents listCountries={setCountries} />
        </Card.Header>
        <Card.Body>
          <Countries current={countries} />
        </Card.Body>
      </Card>
    </ApolloProvider>
  );
}

export default App;
