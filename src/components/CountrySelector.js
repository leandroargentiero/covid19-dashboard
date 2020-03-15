import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

import Stats from './Stats';

import fetchDataApi from '../hooks/fetchDataApi';

const API_ENDPOINT = process.env.REACT_APP_API_KEY;

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
          title='Your country'
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        >
          <ReactFlagsSelect
            searchable={true}
            defaultCountry={selectedCountry}
            onSelect={code => setSelectedCountry(countries.iso3[code])}
          />
        </Stats>
      )}
    </>
  );
};

export default CountrySelector;
