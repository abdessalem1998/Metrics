/* eslint-disable */
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCases } from '../../redux/covidCases/cases';
import Nav from '../Nav';
import stat from './stat.svg';

const Details = () => {
  const location = useLocation();
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();
  const singleData = location.state;
  const dataLength = singleData.regions.length
  let countDesign = 0;
  let color1;

  return (
    <>
    <div className="container-fluid h-100 " style={{backgroundColor:'#FC5193' }}>
    <div className="row ">
    <Nav year="2022" title="Whole Country Data"/>
    <div className="row mb-5 text-center text-white ">
    <div className="col-6" style={{backgroundImage: `url(${stat})`,backgroundSize: '100%',backgroundRepeat:'no-repeat'}}></div>
    <div className="col-6">
    <h3>{singleData.name}</h3>
    <p>Total confirmed cases: {singleData.today_confirmed}</p>
    <p>Total deaths: {singleData.today_deaths}</p>
    <p>{singleData.date} cases: {singleData.today_new_confirmed}</p>
    <p>{singleData.date} deaths: {singleData.today_new_deaths}</p>
    </div>

    </div>
    <p className="text-white m-0 p-1" style={{backgroundColor:'#DD4883' }}><b>STATS BY REGIONS</b></p>
    {
      singleData.regions.map((region) => {
          countDesign++;
          if (countDesign %2 === 1) {
            color1='#EA4C89';
          }else {
            color1='#CE4176';
          }
            return (
            <div key={region.id} className="col-12 text-center p-3 text-white" style= {{backgroundColor: `${color1}`}}>
            <h4>{region.name}</h4>
            <p>Total confirmed cases: {region.today_confirmed}</p>
            <p>Total deaths: {region.today_deaths}</p>
            <p>{region.date} cases: {region.today_new_confirmed}</p>
            <p>{region.date} deaths: {region.today_new_deaths}</p>
            </div>
          )




})
    }
    {(dataLength===0) && (
      <div className="d-flex justify-content-center">
      <h3 className="text-white text-center mt-5 p-3 border w-75">
        No Data will  available for this county
      </h3>
      </div>

      )
    }
    </div>
    </div>
    </>
  );
};

export default Details;
