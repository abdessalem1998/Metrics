/* eslint-disable react/destructuring-assignment */
const Item = (singledata) => (
  <div className="col-10 text-center p-3">
    <h3><b>{singledata.name}</b></h3>
    <p>
      Total confirmed cases:
      {singledata.totalConfirmed}
    </p>
    <p>
      Total deaths:
      {singledata.totalDeaths}
    </p>
    <p>
      {singledata.date}
      cases:
      {singledata.dateConfirmed}
    </p>
    <p>
      {singledata.date}
      deaths:
      {singledata.dateDeaths}
    </p>
  </div>
);

export default Item;
