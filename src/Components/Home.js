import React from 'react'
import axios from 'axios';
import { useContext } from 'react'
import { DataContext } from '../Context';
import Background from './Background';

export default function Home() {
    const {data,setData,city,setCity}=useContext(DataContext);
    const api='75dddad8ee1974a4e63741621c4df1d1';
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    async function fetchData(){
        try {
          const response=await axios.get(URL);
        setData(response.data);
        console.log(response);
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
              <b>City you're in : {data && data.name ? data.name : "-"}, {data && data.sys?data.sys.country:'-'}</b>
            </p>
            <p>
              <b>
                Weather : {data && data.weather ? data.weather[0].main : "-"}
              </b>
            </p>
            <p>
              <b>Temperature : {data && data.main ? data.main.temp : "-"}</b>
            </p>
            <p>
              <b>Humidity : {data && data.main ? data.main.humidity : "-"}</b>
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
