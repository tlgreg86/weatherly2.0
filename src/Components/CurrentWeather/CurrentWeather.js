// TODO
// - the name of the current city √
// - the current condition √
// - the current date √
// - the current temperature √
// - the expected high and expected low for the day √
// - a summary of what the weather is going to be like that day √
import React from 'react';
import styled from 'styled-components';
import { data } from '../../helpers/dummyData';

const CurrentWeatherWrapper = styled.div`
  border: 1px solid red;
`;

const CurrentWeather = () => {
  return (
    <CurrentWeatherWrapper>
      <div>{data.current_observation.local_time_rfc822}</div>
      <div>{data.current_observation.temp_f}</div>
      <div>{data.current_observation.display_location.full}</div>
      <div> {data.forecast.simpleforecast.forecastday[0].high.fahrenheit}/{data.forecast.simpleforecast.forecastday[0].low.fahrenheit}</div >
      <div>{data.current_observation.weather}</div>
      <div>{data.forecast.txt_forecast.forecastday[0].fcttext}</div>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;