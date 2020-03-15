import { useState, useEffect } from 'react';
import axios from 'axios';

const useStats = url => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    // fetch data from api url
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    // re-call the function when updated
    fetchData();
  }, [url]);
  return [{ data, isLoading, isError }];
};

export default useStats;
