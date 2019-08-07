import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav.jsx';
import AllCountries from './AllCountries.jsx';
import EachCountry from './EachCountry.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav/>
       <div className="Dashboard">
       <AllCountries/>
       <Route path="/detail/:id" component={EachCountry}/>
       </div>
       {/* <EachCountry/> */}
      </div>
    );
  }
}

export default App;
