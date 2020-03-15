import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
  background: ${props => props.theme.colors.primary};
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroSubtitle = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0;
`;

const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.textOnPrimary};
  font-size: 2rem;
  font-weight: 400;
  margin-top: 16px;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroSubtitle>Real-time dashboard</HeroSubtitle>
      <HeroTitle>COVID-19 Virus Outbreak</HeroTitle>
    </HeroWrapper>
  );
};

export default Hero;
