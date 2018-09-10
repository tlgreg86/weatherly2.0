import React, { Component } from 'react';
import './App.css';

import Welcome from './Components/Welcome/Welcome'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import SevenHour from './Components/SevenHour/SevenHour';
import TenDay from './Components/TenDay/TenDay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <CurrentWeather />
        <SevenHour />
        <TenDay />
      </div>
    );
  }
}

export default App;
