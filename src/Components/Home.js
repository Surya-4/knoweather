import React from 'react'
import axios from 'axios';
import { useContext } from 'react'
import { DataContext } from '../Context';
import Background from './Background';

export default function Home(props) {
  //process.env.REACT_APP_API
    const {data,setData,city,setCity}=useContext(DataContext);
    let API_KEY=props.API_KEY;
    API_KEY=API_KEY.replaceAll('"', '');
    // API_KEY=API_KEY.slice(0,-1);
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    async function fetchData(){
        try {
          const response=await axios.get(URL);
        setData(response.data);
        console.log(response.data);
        } catch (error) {
          setData([]);
          alert('data not found');
        }
    }
  return (
    <>
      <div
        className="bg"
        style={{
          backgroundImage: `url(${data ? Background(data):""})`,
        }}
      >
        <div class="input-group">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              console.log(city);
              fetchData();
            }}
          >
            search
          </button>
        </div>
        <div className="card" style={{ width: "350px" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                border: "1px",
                backgroundColor: "red",
                width: "40%",
                color: "yellow",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              KnoWeather
            </h5>
            <p>
              <b>City you're in : {data && data.name?data.name:'_' } {data && data.sys? `, ${data.sys.country}`:''}</b>
            </p>
            <p>
              <b>
                Weather : {data && data.weather ? data.weather[0].main : "_"}
              </b>
            </p>
            <p>
              <b>Temperature : {data && data.main ? (data.main.temp-273.15).toFixed(2) : "_"} &#8451;</b>
            </p>
            <p>
              <b>Feels Like Temperature : {data && data.main ? (data.main.feels_like-273.15).toFixed(2) : "_"} &#8451;</b>
            </p>
            <p>
              <b>Humidity : {data && data.main ? data.main.humidity : "_"} %</b>
            </p>
          </div>
        </div>
        <div className="footer">
        <b>
            <p>Come here again when you Need to KnoWeather</p>
          </b>
        </div>
      </div>
    </>
  );
}
