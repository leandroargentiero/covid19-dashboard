import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { mediaQuery } from '../themes';

const HeroWrapper = styled.section`
  background: linear-gradient(
      213deg,
      rgb(132, 60, 242) 0%,
      rgb(69, 50, 228) 100%
    )
    right center / contain no-repeat;
  width: 100%;
  height: 300px;
  display: flex;

  ${mediaQuery.phone} {
    height: 380px;
  }
`;

const HeroWrapperInside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery.phone} {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
`;

const HeroSubtitle = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0 0 16px 0;
`;

const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.textOnPrimary};
  font-size: 2rem;
  font-weight: 300;
  margin: 0;

  ${mediaQuery.phone} {
    font-size: 1.8rem;
  }
`;

const HeroDescription = styled.p`
  max-width: 500px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroWrapperInside className='container'>
        <div>
          <HeroSubtitle>real-time dashboard</HeroSubtitle>
          <HeroTitle>COVID-19 Virus</HeroTitle>
          <HeroDescription>
            The Novel Coronavirus has spread all over the world, the number of
            countries suffering from infections is increasing. This dashboard
            displays official data from the American Johns Hopkins University.
          </HeroDescription>
        </div>
        <Logo />
      </HeroWrapperInside>
    </HeroWrapper>
  );
};

export default Hero;
