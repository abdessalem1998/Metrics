/* eslint-disable */
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCases } from '../../redux/covidCases/cases';
import Nav from '../Nav';

const Details = () => {
  const location = useLocation();
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();
  const singleData = location.state;
  console.log(singleData.regions);
  return (
    <>
    <Nav />
    <div className="row border">
      <h3>{singleData.name}</h3>
      <p>Total confirmed cases: {singleData.today_confirmed}</p>
      <p>Total deaths: {singleData.today_deaths}</p>
      <p>{singleData.date} cases: {singleData.today_new_confirmed}</p>
      <p>{singleData.date} deaths: {singleData.today_new_deaths}</p>
    </div>
    <div className="row border">
    {
      singleData.regions.map((region) => {
          return (
          <div className="col-6 border">
          <h4>{region.name}</h4>
          <p>Total confirmed cases: {region.today_confirmed}</p>
          <p>Total deaths: {region.today_deaths}</p>
          <p>{region.date} cases: {region.today_new_confirmed}</p>
          <p>{region.date} deaths: {region.today_new_deaths}</p>
          </div>
        )
      })
    }
    </div>
    </>
  );
};

export default Details;
