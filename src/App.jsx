import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import countriesData from '../src/countries.json'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'

function App() {
  const [countries, setCountries] = useState(countriesData)

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/list" element={<CountriesList />} /> */}
        <Route path="/details/:countryId" element={<CountryDetails countries={countries} />} />

        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
      </Routes>
    </div>
  )
}

export default App
