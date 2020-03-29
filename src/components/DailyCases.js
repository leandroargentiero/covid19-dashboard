import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chart from './Chart';

const CasesWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 24px;
  margin-bottom: 60px;
`;

const DailyCases = ({ url }) => {
  return (
    <CasesWrapper>
      <Chart name='confirmed' url={url} />
      <Chart name='deaths' url={url} />
    </CasesWrapper>
  );
};

DailyCases.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DailyCases;
