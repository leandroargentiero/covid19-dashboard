import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

import Stats from './Stats';

import fetchDataApi from '../hooks/fetchDataApi';

const API_ENDPOINT = process.env.REACT_APP_API_KEY;

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

const CountrySelector = () => {
  const [{ data: countries, isLoading, isError }] = fetchDataApi(
    `${API_ENDPOINT}/countries`
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
          title='Per country'
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

export default CountrySelector;
