import React from 'react';
import styled from 'styled-components';

import fetchDataApi from '../hooks/fetchDataApi';
import Card from './Card';

import { formatDate } from '../utils';
import ErrorPlaceholder from './ErrorPlaceholder';

const StatsSection = styled.section`
  display: block;
`;

const StatsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;

const StatsTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const StatsDate = styled.p`
  font-size: 12px;
  margin: 8px 0 0 0;
  opacity: 0.5;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin: 40px 0;
`;

const Stats = ({ title, url, children }) => {
  const [{ data, isLoading, isError }] = fetchDataApi(url);
  return (
    <StatsSection>
      <StatsHeader>
        <div>
          <StatsTitle>{title}</StatsTitle>
          <StatsDate>
            Last updated: {data?.lastUpdate && formatDate(data.lastUpdate)}
          </StatsDate>
        </div>
        {children && children}
      </StatsHeader>
      {isError ? (
        <ErrorPlaceholder
          emoji='🧭'
          message={`We couldn't find any data about this country`}
        />
      ) : (
        <StatsGrid>
          <Card
            title='confirmed'
            info='warning'
            loading={isLoading}
            data={data}
          />
          <Card title='deaths' info='danger' loading={isLoading} data={data} />
          <Card
            title='recovered'
            info='success'
            loading={isLoading}
            data={data}
          />
        </StatsGrid>
      )}
    </StatsSection>
  );
};

export default Stats;
