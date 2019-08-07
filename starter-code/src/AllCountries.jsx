import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import countries from './countries.json';

export default class AllCountries extends Component {
    render() {
        let eachCountry =countries.map(country=>{
            return(
                <div>
                    <Link to={`/detail/${country.cca3}`}>
                        <p>{country.flag.normalize()} {country.name.common}</p>
                    </Link>
                </div>
            )
        })

        return (
            <div className="countriesTab">
                {eachCountry}
            </div>
        )
    }
}
