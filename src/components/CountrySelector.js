import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

import Stats from './Stats';

import fetchDataApi from '../hooks/fetchDataApi';

const WrapperSelect = styled.div`
  .flag-select {
    background: ${props => props.theme.colors.background};

    .filterBox input {
      padding: 8px 12px;
    }
  }
  .flag-select__options {
    right: 0;
  }
`;

const CountrySelector = ({ url }) => {
  const [{ data: countries, isLoading, isError }] = fetchDataApi(
    `${url}/countries`
  );
  const [selectedCountry, setSelectedCountry] = useState('');

  // get user's current country code
  useEffect(() => {
    fetch(`https://ipapi.co/country`)
      .then(res => res.text())
      .then(setSelectedCountry)
      .catch(() => setSelectedCountry('ID'));
  }, []);

  return (
    <>
      {countries && countries.iso3 && selectedCountry !== '' && (
        <Stats
          title='By country'
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        >
          <WrapperSelect>
            <ReactFlagsSelect
              searchable={true}
              defaultCountry={selectedCountry}
              onSelect={code => setSelectedCountry(countries.iso3[code])}
            />
          </WrapperSelect>
        </Stats>
      )}
    </>
  );
};

CountrySelector.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CountrySelector;
