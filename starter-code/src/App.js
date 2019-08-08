import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav.jsx';
import AllCountries from './AllCountries.jsx';
import EachCountry from './EachCountry.jsx';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        countries:[]
    }
}

componentDidMount() {
    axios.get("http://localhost:3001/countries")
    .then(response => {
        this.setState({countries: response.data})
    })
}

  render() {
    return (
      <div className="App">
       <Nav/>
       <div className="Dashboard">
       <AllCountries countries={this.state.countries}/>
       <Route path="/detail/:id" render={props => <EachCountry countries={this.state.countries} {...props}/>} />
       </div>
       {/* <EachCountry/> */}
      </div>
    );
  }
}

export default App;
