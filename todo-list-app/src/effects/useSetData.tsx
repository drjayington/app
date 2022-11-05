import { useState, useEffect } from 'react';

interface inputData {
  description: string,
  isComplete: boolean,
  url:string
}

const useSetData = ({description, isComplete, url}:inputData ) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { 
        signal: abortController.signal,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, isComplete })
      })
      .then(res => {
        if (!res.ok) {
          throw Error('failed to set data');
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
          console.log('set aborted')
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
 
export default useSetData;