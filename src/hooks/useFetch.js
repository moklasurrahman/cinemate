import {useState,  useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoding, setIsloding] = useState(false);
    const [error, setError] = useState(null);

   
    useEffect(() => {
    
        const fetchData = async () => {
          setIsloding(true);
          try {
            const response = await fetch(url); //url comming from Movielist
            const data = await response.json();
            setData(data.results);
          } catch (error) {
            setError(error);
          } finally {
            setIsloding(false);
          }
        };
    
        fetchData();
    
      }, [url]);
  
    return {data, isLoding, error}
}

export default useFetch