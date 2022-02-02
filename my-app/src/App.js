import './App.css';
import DateCountry from './components/DateCountry';
import SelectCountries from './components/SelecCountries';
function App() {
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
