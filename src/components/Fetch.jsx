import { useQuery } from "@apollo/react-hooks";

function Fetch(Q, code) {
  const { loading, error, data } = useQuery(Q, code);
  if (loading) return "l";
  if (error) return "r";
  return data;
}
export default Fetch;
