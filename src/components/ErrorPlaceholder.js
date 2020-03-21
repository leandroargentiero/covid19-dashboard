import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorWrapper = styled.section`
  background: ${props => props.theme.colors.background};
  font-size: 2rem;
  border-radius: 4px;
  padding: 20px;
  margin: 40px auto;
  max-width: 350px;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ErrorEmoji = styled.h3`
  font-size: 2rem;
  margin: 0 0 16px 0;
`;

const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const ErrorPlaceholder = ({ emoji, message }) => {
  return (
    <ErrorWrapper>
      <ErrorEmoji>{emoji}</ErrorEmoji>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorWrapper>
  );
};

ErrorPlaceholder.propTypes = {
  emoji: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorPlaceholder;
