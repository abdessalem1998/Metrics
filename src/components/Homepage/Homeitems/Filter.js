const Filter = () => {
  const hi = 'find';
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="filter" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">{hi}</button>
      </div>
    </div>
  );
};

export default Filter;
