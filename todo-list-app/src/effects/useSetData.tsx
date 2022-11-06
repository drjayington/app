import { useState, useEffect } from 'react';
import IUpsertData from '../interfaces/IUpsertData';

const useSetData = (url:string) => {
  const [upsertData, setUpsertData] = useState<IUpsertData> ({id: "", description: "", isComplete: false, inProgress: false});
  const [upsertError, setUpsertError] = useState(false);
  const [upsertIsLoading, setUpsertIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
      
    if(upsertData.inProgress){
      fetch(url + upsertData.id, { 
        signal: abortController.signal,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: upsertData.description, isComplete: upsertData.isComplete })
      })
      .then(res => {
        if (!res.ok) {
          throw Error('failed to set data');
        } 
        return res.json();
      })
      .then(data => {
        setUpsertIsLoading(false);
        setUpsertData({...data, inProgress: false});
        setUpsertError(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('set aborted')
        } else {
          setUpsertIsLoading(false);
          setUpsertError(err.message);
        }
      })
    }

    return () => abortController.abort();
  }, [url, upsertData])

  return { upsertData, upsertError, upsertIsLoading, setUpsertData};
}
 
export default useSetData;