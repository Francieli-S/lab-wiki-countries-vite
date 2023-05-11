import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function CountryDetails({ countries }) {
  const [countryDetails, setCountryDetails] = useState()
  const { countryId } = useParams()

  useEffect(() => {
    const countryToShow = countries.filter((country) => country.alpha3Code === countryId)
    setCountryDetails(countryToShow.length > 0 ? countryToShow[0] : undefined)
  }, [countryId, countries])

  return (
    <div className="col-7">
      {countryDetails && (
        <div>
          Details page
          <h1>{countryDetails.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: 30 }}>Capital</td>
                <td>{countryDetails.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDetails.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryDetails.borders.map((border, index) => (
                      <li key={index}>
                        {border}
                        {/* <a href=></a> */}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default CountryDetails
