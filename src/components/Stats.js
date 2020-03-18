import React from 'react';
import styled from 'styled-components';

import fetchDataApi from '../hooks/fetchDataApi';
import Card from './Card';

import { formatDate } from '../utils';

const StatsSection = styled.section`
  display: block;
`;

const StatsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StatsTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const StatsDate = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.5;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin: 20px 0 40px 0;
`;

const Stats = ({ title, url, children }) => {
  const [{ data, isLoading, isError }] = fetchDataApi(url);
  return (
    <StatsSection>
      {isError ? (
        <p>Something Went wrong...</p>
      ) : (
        <>
          <StatsHeader>
            <StatsTitle>{title}</StatsTitle>
            <StatsDate>
              Last updated: {data?.lastUpdate && formatDate(data.lastUpdate)}
            </StatsDate>
          </StatsHeader>
          {children && children}
          <StatsGrid>
            {data && (
              <>
                <Card
                  title='Confirmed'
                  info='warning'
                  loading={isLoading}
                  data={data.confirmed.value}
                />
                <Card
                  title='Deaths'
                  info='danger'
                  loading={isLoading}
                  data={data.deaths.value}
                />
                <Card
                  title='Recovered'
                  info='success'
                  loading={isLoading}
                  data={data.recovered.value}
                />
              </>
            )}
          </StatsGrid>
        </>
      )}
    </StatsSection>
  );
};

export default Stats;
