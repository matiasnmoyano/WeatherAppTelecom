import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import DateCountry from './components/DateCountry';
import SelectCountries from './components/SelecCountries';
import Axios from 'axios'
import env from'react-dotenv'
function App() {
  const [loading,setLoading] = useState(true) 
  const actualPosition = {
    lat:0,
    long:0,
  }
  const apikey='4ae2636d8dfbdc3044bede63951a019b'
  let actualCountry = null
  const geo = navigator.geolocation.getCurrentPosition(function(position) {
    actualPosition.lat = position.coords.latitude;
    actualPosition.long = position.coords.longitude
  });

  useEffect(() => {
    setTimeout(() => {
      Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${actualPosition.lat}&lon=${actualPosition.long}&lang=esp&exclude=hourly,minutely&appid=${apikey}`)
      .then((res) => {
        actualCountry=res.data
        setLoading(false)
      })
    }, 2000);  
  }, []);
  
  return (
      <div className="App">
          <section className="section">
          <SelectCountries/>
          </section>
          <main className="main">
          <DateCountry/>
          </main>
      </div>
  );
}

export default App;
