import React from 'react';
import styled from 'styled-components';

import { formatNumber } from '../utils';

const CardWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  font-size: 2rem;
  border-radius: 4px;
  padding: 20px;
`;
const CardTitle = styled.h4`
  font-size: 14px;
  margin: 0 0 8px 0;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: 500;
`;

const CardNumber = styled.h3`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 500;
  color: ${props => {
    switch (props.info) {
      case 'warning':
        return props.theme.colors.warning;
      case 'success':
        return props.theme.colors.success;
      case 'danger':
        return props.theme.colors.danger;
      default:
        return '';
    }
  }};
`;

const LoadingIndicator = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const CardRate = styled.p`
  background: rgba(0, 0, 0, 0.1);
`;

const Card = ({ title, info, loading, data }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      {loading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        <>
          <CardNumber info={info}>{formatNumber(data)}</CardNumber>
        </>
      )}
    </CardWrapper>
  );
};

export default Card;
