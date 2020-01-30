import { useQuery } from "@apollo/react-hooks";

function Fetch(Q, code) {
  const { loading, error, data } = useQuery(Q, code);
  if (loading) return { continents: [], country: [] };
  if (error) return { continents: [], country: [] };
  return data;
}
export default Fetch;
