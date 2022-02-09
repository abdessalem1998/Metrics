/* eslint-disable */
const Item = (singledata) => {
  return (
    <>
      <h3>{singledata.name}</h3>
      <p>Total confirmed cases: {singledata.totalConfirmed}</p>
      <p>Total deaths: {singledata.totalDeaths}</p>
      <p>{singledata.date} cases: {singledata.dateConfirmed}</p>
      <p>{singledata.date} deaths: {singledata.dateDeaths}</p>
    </>
  );
};

export default Item;
