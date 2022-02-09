/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCasesByName } from '../../../redux/covidCases/cases';

const Filter = () => {
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();
  const filterHandler = (e) => {
    dispatch(filterCasesByName(e));
  };
  return (
    <div className="input-group mb-3">
      <input type="text" onChange={(e) => filterHandler(e.target.value)} className="form-control" placeholder="filter" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">find</button>
      </div>
    </div>
  );
};

export default Filter;
