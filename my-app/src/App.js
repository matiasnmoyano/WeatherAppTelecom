import './App.css';
import React from 'react';
import { useEffect } from 'react';
import DateCountry from './components/DateCountry';
import SelectCountries from './components/SelecCountries';
import Axios from 'axios'

function App() {
  const actualPosition = {
    lat:0,
    long:0,
  }
  const apikey='4ae2636d8dfbdc3044bede63951a019b'

  navigator.geolocation.getCurrentPosition(function(position) {
    actualPosition.lat = position.coords.latitude;
    actualPosition.long = position.coords.longitude
    return
  });

  console.log("soy actual position")

  useEffect(() => {
    Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&lang=esp&exclude=hourly,minutely&appid=${apikey}`)
    /* api.openweathermap.org/data/2.5/forecast/daily?lat=${actualPosition.lat}&lon=${actualPosition.long}&cnt=${5}&appid=${"b94f09b1bc7a858dc4085fe80ed32dbf"} */
    .then((res) => {
      console.log(res,"soy res")
    })
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
