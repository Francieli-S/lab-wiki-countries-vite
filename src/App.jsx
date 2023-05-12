import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
// import countriesData from '../src/countries.json' // to use data from API (fetch and axios)
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar'
import axios from 'axios'

function App() {
  // const [countries, setCountries] = useState(countriesData)
  const [countries, setCountries] = useState([])

  // iteration 4 using fetch
  const fetchData = async () => {
    try {
      const response = await fetch('https://ih-countries-api.herokuapp.com/countries')
      const parsed = await response.json()
      console.log(parsed)
      setCountries(parsed)
    } catch (error) {
      console.log(error)
    }
  }

  // iteration 4 using axios
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
  //     console.log(response.status)
  //     if (response.status === 200){
  //       setCountries(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    fetchData()
  }, [])

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
