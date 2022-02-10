/* eslint-disable */
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCases } from '../../redux/covidCases/cases';
import Filter from './Homeitems/Filter';
import Item from './Homeitems/Item';
import Nav from '../Nav';
import covid from './covid.svg';

const Home = () => {
  const covidData = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();

  let countDesign = 0;
  let switcher = 0;
  let color1;

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
    <div className="container-fluid " style={{backgroundColor:'#FC5193' }}>
      <div className="row">
        <Nav year="2022" title="Whole World Data"/>
        <Filter data={worldData}/>
        <p className="text-white m-0 p-1" style={{backgroundColor:'#DD4883' }}><b>STATS BY COUNTRY</b></p>
        {
          covidData.map((singledata) => {
            if (!singledata.filtered) {
              countDesign++;
              if (countDesign ===1) {
                color1='#EA4C89'
              }else {
                if (switcher < 2) {
                  color1='#CE4176'
                  switcher++;
                }else {
                  if (switcher<4) {
                    switcher++;
                    color1='#EA4C89'
                  }else {
                    color1='#CE4176'
                    switcher=1;
                  }

                }
              }

              return (
              <div key={singledata.id} className="col-6 text-white m-0" style= {{backgroundColor: `${color1}`}}>
              <Link
              style={{backgroundColor:'red' }}
              className="text-white"
              state={singledata}
              color={color1}
              to={`/details/${singledata.name}`}
              style={{ textDecoration: 'none',color:'black' }}
              >
              <div className="row" >
                <div className="col-4 " style={{backgroundImage: `url(${covid})`,backgroundRepeat:'no-repeat',backgroundSize: '60%'}}>
                </div>
                <Item
                  name={singledata.name}
                  date={singledata.date}
                  totalConfirmed={singledata.today_confirmed}
                  totalDeaths={singledata.today_deaths}
                  dateConfirmed={singledata.today_new_confirmed}
                  dateDeaths={singledata.today_new_deaths}
                  filtered={singledata.filtered}
                />

              </div>


              </Link>
              </div>
            )
            }
            })
        }
      </div>
    </div>
  );
};

export default Home;
