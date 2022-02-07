import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import DateCountry from './components/DateCountry';
import SelectCountries from './components/SelectCountries';
import Axios from 'axios'
function App() {
  const [loading,setLoading] = useState(true) 
  const actualPosition = {
    lat:0,
    long:0,
  }
  const [actualCountry, setActualCountry] = useState(null)
  const [selectCountry, setSelectCountry] = useState(null)
  const [data,setData] = useState()
  const apikey='4ae2636d8dfbdc3044bede63951a019b'
  const geo = navigator.geolocation.getCurrentPosition(function(position) {
    actualPosition.lat = position.coords.latitude;
    actualPosition.long = position.coords.longitude
  });
  const countries = [
    {
      name:"America/Chicago",
      lat:33.44,
      long:-94.04
    },
    {
      name:"Santiago/Chile",
      lat:-33.45694,
      long:-70.64827
    },
    {
      name:"Madrid/Europa",
      lat:42,
      long:1.6
    },
    {
      name:"Montevideo/Uruguay",
      lat:-34.90328,
      long:-56.18816
    },
    {
      name:"Lima/Peru",
      lat:-12.0453,
      long: -77.0311
    }
   ]
  useEffect(() => {
      if(selectCountry !== "actual" && selectCountry !== null){
        setLoading(true)
        countries.map((c) => {
          if(c.name === selectCountry){
            Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${c.lat}&lon=${c.long}&lang=es&units=metric&exclude=hourly,minutely&appid=${apikey}`)
            .then((result) => {
              setData(result.data)
            })
          }
        })
      }else if(selectCountry === "actual"){
        setData(actualCountry)
      }
  }, [selectCountry]);
  useEffect(() => {
    setTimeout(() => {
      Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${actualPosition.lat}&lon=${actualPosition.long}&lang=es&units=metric&exclude=hourly,minutely&appid=${apikey}`)
      .then((res) => {
        setActualCountry(res.data)
        setData(res.data)
        setLoading(false)
      })
    }, 1000);  
  }, []);

  return (
      <div className="App">
          <section className="section">
          <SelectCountries selectCountry={selectCountry} setSelectCountry={setSelectCountry}/>
          </section>
          <main className="main">
          <DateCountry selectCountry={data}/>
          </main>
      </div>
  );
}

export default App;
