import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './App.css';

import selector from './helpers/selector';
import Welcome from './Components/Welcome/Welcome'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather';
import SevenHour from './Components/SevenHour/SevenHour';
import TenDay from './Components/TenDay/TenDay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({
      value
    });
  };

  
  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <Welcome />
        <CurrentWeather/>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label='Seven Hour' />
          <Tab label='Ten Day' />
        </Tabs>
        {value === 0 && <SevenHour />}
        {value === 1 && <TenDay />}
      </div>
    );
  }
}

export default App;
