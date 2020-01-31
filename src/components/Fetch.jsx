import { useQuery } from "@apollo/react-hooks";

function Fetch(Query, queryVars) {
  const { loading, error, data } = useQuery(Query, queryVars);
  if (loading) return "l";
  if (error) return "r";
  return data;
}
export default Fetch;
