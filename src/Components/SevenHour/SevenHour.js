import React from 'react';
import styled from 'styled-components';
import { data } from '../../helpers/dummyData';
import Card from '../Card/Card'


// hour
// an image that reflects the weather
// the projected temperature
const SevenHourWrapper = styled.div`
  border: 1px solid blue;
`;

const SevenHour = () => {
  return (
    <SevenHourWrapper>
      {
        data.hourly_forecast.map(hour => {
          return <Card type='sevenHour' data={hour}/>
        }).slice(0,7)
      }
    </SevenHourWrapper>
  );
};

export default SevenHour;