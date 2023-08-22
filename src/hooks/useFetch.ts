import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData(url: string) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(url);
  }, []);
  return { data, loading };
};

export default useFetch;
