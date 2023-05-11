import React from 'react'
import { Link } from 'react-router-dom'
import CountryDetails from './CountryDetails'

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          <Link to={`/details/${country.alpha3Code}`}>{country.name.common}</Link>
        </div>
      ))}
      {/* <CountryDetails countries={countries} /> */}
    </div>
  )
}

export default CountriesList
