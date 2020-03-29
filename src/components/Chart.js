import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import * as moment from 'moment';

import fetchDataApi from '../hooks/fetchDataApi';
import Loader from './Loader';

const ChartTitle = styled.h4`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Chart = ({ url, name }) => {
  const [{ data, isLoading }] = fetchDataApi(`${url}/daily`);
  const [dailyCases, setDailyCases] = useState('');

  useEffect(() => {
    if (data) {
      const computedCases = data.map(x => {
        console.log(x);
        let caseObj = {};
        caseObj['totalconfirmed'] = x.confirmed.total;
        caseObj['dailyNewConfirmed'] = x.deltaConfirmedDetail.total;
        caseObj['totaldeaths'] = x.deaths.total;
        caseObj['reportDate'] = moment(x.reportDate).format('DD MMMM');
        return caseObj;
      });
      console.log(computedCases);
      setDailyCases(computedCases);
    }
  }, [data]);

  const determineChartColor = value =>
    value === 'confirmed' ? '#FF6508' : '#FF1810';

  return (
    <div>
      <ChartTitle>Daily {name}</ChartTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <ResponsiveContainer width='100%' height={200}>
          <AreaChart
            data={dailyCases ? dailyCases : null}
            margin={{ left: 10 }}
          >
            <defs>
              <linearGradient id='colorConfirmed' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor={determineChartColor(name)}
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor={determineChartColor(name)}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              name={name}
              type='monotone'
              dataKey={`total${name}`}
              stroke={determineChartColor(name)}
              fillOpacity={1}
              fill='url(#colorConfirmed)'
            />
            <CartesianGrid strokeDasharray='2 2' />
            <XAxis minTickGap={30} dataKey='reportDate' />
            <YAxis />
            <Legend />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

Chart.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Chart;
