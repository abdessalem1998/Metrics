/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCasesByName } from '../../../redux/covidCases/cases';
import world from './world.svg';

const Filter = (data) => {
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();
  const filterHandler = (e) => {
    dispatch(filterCasesByName(e));
  };
  return (
    <div className="input-group mb-5 text-center text-white" style={{backgroundColor:'#FC5193',height:'250px'}}>
    <div className="col-6 d-flex align-items-center" style={{backgroundImage: `url(${world})`,backgroundSize: '100%'}}>
      <input type="text" onChange={(e) => filterHandler(e.target.value)} className="form-control border border-white" placeholder="Find ..." />
    </div>
      <div className="col-6 ">
        <h2></h2>
        <h2>World Cases </h2>
        <p><b>Total confirmed cases: {data.data.today_confirmed}</b></p>
        <p><b>Total deaths: {data.data.today_deaths}</b></p>
        <p><b>{data.data.date} cases: {data.data.today_new_confirmed}</b></p>
        <p><b>{data.data.date} deaths: {data.data.today_new_deaths}</b></p>
      </div>


    </div>
  );
};

export default Filter;
