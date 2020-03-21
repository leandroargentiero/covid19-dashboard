import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import fetchDataApi from '../hooks/fetchDataApi';
import Loader from './Loader';

const ChartTitle = styled.h4`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Chart = ({ url }) => {
  const [{ data, isLoading, isError }] = fetchDataApi(`${url}/daily`);

  return (
    <>
      <ChartTitle>Daily cases</ChartTitle>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart data={data} margin={{ left: 10 }}>
          <defs>
            <linearGradient id='colorConfirmed' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#FF6508' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#FF6508' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorRecovered' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#03B65A' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#03B65A' stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            name='Total Confirmed'
            type='monotone'
            dataKey='totalConfirmed'
            stroke='#FF6508'
            fillOpacity={1}
            fill='url(#colorConfirmed)'
          />
          <Area
            name='Total Recovered'
            type='monotone'
            dataKey='totalRecovered'
            stroke='#03B65A'
            fillOpacity={1}
            fill='url(#colorRecovered)'
          />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='reportDateString' />
          <YAxis />
          <Legend verticalAlign='bottom' height={80} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

Chart.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Chart;
