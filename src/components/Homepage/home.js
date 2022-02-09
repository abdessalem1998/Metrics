/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCases } from '../../redux/covidCases/cases';
import Filter from './Homeitems/Filter';
import Item from './Homeitems/Item';

const Home = () => {
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();

  // const today = new Date().toISOString().slice(0, 10);
  const today = '2022-02-08';
  const URL = 'https://api.covid19tracking.narrativa.com/api';

  const fetchData = async () => {
    const response = await fetch(`${URL}/${today}`, {
      method: 'GET',
    });
    const jsonRespnse = await response.json();
    const neededData = jsonRespnse.dates[`${today}`].countries;
    dispatch(fetchCases(Object.values(neededData)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Filter />
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
