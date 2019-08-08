import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

export default class EachCountry extends Component {
    render() {
        debugger
        const {countries}=this.props
        const {params}=this.props.match;
        const getCountry = (id) => {

            let found = countries.find(country => {
              return country.cca3 === id;
            })
            return found;
          };
        debugger
        const foundCountry = getCountry(params.id);
        const borderCountries= foundCountry.borders.map(
            borderCountry=>{
                let bctry= countries.find(country=>{
                    return country.cca3===borderCountry;
                })
                return (
                    <Link to={`/detail/${bctry.cca3}`} ><li>{bctry.name.official}</li></Link>
                )
            }
        )
        return (
            <div className="eachCountry">
                <div>
                <h1>{foundCountry.name.official}</h1>
                </div>
                <div>
                <p>Capital: {foundCountry.capital[0]}</p>
                </div>
                <div>
                <p>Area: {foundCountry.area} km2</p>
                </div>
                <div className="borderCountries">
                    <p>Border with: </p>
                    <ul>
                    {borderCountries}
                    </ul>
                </div>
            </div>
        )
    }
}
