import { useState, useEffect } from 'react';
import IData from '../interfaces/IData';

const useGetData = (url:string) => {
  const [data, setData] = useState<IData[]> ([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

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
        setError(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('get aborted')
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      })

    return () => abortController.abort();
  }, [url, setData])

  return { data, error, isLoading };
}
 
export default useGetData;