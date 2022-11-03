import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function CountryDetails() {
    const {alpha3Code} = useParams();

    const [countryInfo, setCountryInfo] = useState({})

    useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}` )
      .then((response) => {
        setCountryInfo(response.data)
      })
      .catch((err) => console.log(err))
    }, [alpha3Code])
    
  return (
    <div className="col-7">
            <h1>{countryInfo.name && countryInfo.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{countryInfo.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryInfo.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      
                      {countryInfo.borders.map((eachCountry) => {
                        return (
                            <li><Link to={`/${countryInfo.alpha3Code}`}>{eachCountry.name}</Link></li>
                        )
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>    
  )
}

export default CountryDetails