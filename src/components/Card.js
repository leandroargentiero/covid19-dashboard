import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { formatNumber } from '../utils';
import Loader from './Loader';

const CardWrapper = styled.div`
  font-size: 2rem;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.grey};
`;
const CardTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  background: #fff;
  padding: 0 20px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

const CardValue = styled.h3`
  font-size: 2rem;
  margin: 0;
  font-weight: 400;
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

const checkValue = (title, data) => {
  switch (title) {
    case 'confirmed':
      return formatNumber(data.confirmed.value);
    case 'recovered':
      return formatNumber(data.recovered.value);
    case 'deaths':
      return formatNumber(data.deaths.value);
    default:
      return '';
  }
};

const Card = ({ title, info, loading, data }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CardValue info={info}>{checkValue(title, data)}</CardValue>
        </>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
};

export default Card;
