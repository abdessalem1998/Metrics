/* eslint-disable */
import { useLocation } from 'react-router-dom';
const Details = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <h1>Details</h1>
  );
};

export default Details;
