import { useState, useEffect } from 'react';

const useGetData = (url:string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('failed to get data');
        } 
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('get aborted')
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      })
    }, 1000);

    return () => abortController.abort();
  }, [url])

  return { data, error, isLoading };
}
 
export default useGetData;