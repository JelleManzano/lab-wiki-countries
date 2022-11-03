import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => setCountries(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
