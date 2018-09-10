import React from 'react';
import styled from 'styled-components';
import { data } from '../../helpers/dummyData';
import Card from '../Card/Card';

const TenDayWrapper = styled.div`
  border: 1px solid lightblue;
`;

const TenDay = () => {
  return (
    <TenDayWrapper>
      {
        data.forecast.simpleforecast.forecastday.map(day => {
          return <Card type='tenDay' data={day} />
        }).slice(0,11)
      }
    </TenDayWrapper>
  );
};

export default TenDay;