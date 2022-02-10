/* eslint-disable */
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCases } from '../../redux/covidCases/cases';
import Filter from './Homeitems/Filter';
import Item from './Homeitems/Item';
import Nav from '../Nav';

const Home = () => {
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();

  const [worldData, setWorldData] = useState(0);

  const today = new Date().toISOString().slice(0, 10);

  const URL = 'https://api.covid19tracking.narrativa.com/api';

  const fetchData = async () => {
    const response = await fetch(`${URL}/${today}`, {
      method: 'GET',
    });
    const jsonRespnse = await response.json();
    const neededData = jsonRespnse.dates[`${today}`].countries;
    //console.log(jsonRespnse.total);
    setWorldData(jsonRespnse.total);
    dispatch(fetchCases(Object.values(neededData)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Nav year="2022" title="Whole World Data"/>
        <Filter data={worldData}/>
        {
          covidData.map((singledata) => {
            if (!singledata.filtered) {
              return (
              <Link
              key={singledata.id}
              className="col-6 border"
              state={singledata}
              to={`/details/${singledata.name}`}
              style={{ textDecoration: 'none',color:'black' }}
              >
              <Item
                name={singledata.name}
                date={singledata.date}
                totalConfirmed={singledata.today_confirmed}
                totalDeaths={singledata.today_deaths}
                dateConfirmed={singledata.today_new_confirmed}
                dateDeaths={singledata.today_new_deaths}
                filtered={singledata.filtered}
              />
              </Link>
            )
            }
            })
        }
      </div>
    </div>
  );
};

export default Home;
