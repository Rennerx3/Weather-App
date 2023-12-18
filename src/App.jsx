import Result from "./components/Result"
import Search from "./components/Search"
import React, {useState, useEffect} from 'react';


const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;

  return formattedDateTime;
};

const currentDateTime = getCurrentDateTime();   


function App() {
  const [apiPlace, setApiPlace] = useState('');
  const [placeData, setPlaceData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState(false);
  const [error, setError] = useState('');

  const place = (city) =>{
    setApiPlace(city);
}

  const back = () => {
    setApiPlace('');
    setPlaceData([]);
    setApiData([]);
    setError('');
    setSearch(false);
  };

  useEffect( () => {
    const fetchData = async () => {
        try {
          if(apiPlace !== ''){
            const resPlace = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${apiPlace}&key=d0cab152bc874a839773e42ea4a6251c`);
            const resultPlace = await resPlace.json();
            setPlaceData(resultPlace);
          }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    
    fetchData();
}, [apiPlace])

  


  useEffect( () => {
    const fetchDataDos = async () => {
      try {
              
        let  lat = placeData.results[0].geometry.lat.toString(),
             lng = placeData.results[0].geometry.lng.toString();

        let username=import.meta.env.VITE_APP_USERNAME,
          password=import.meta.env.VITE_APP_PASSWORD;
          let headers = new Headers();
          headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

            const res = await fetch(`https://api.meteomatics.com/${currentDateTime}-03:00/t_2m:C,weather_symbol_24h:idx,absolute_humidity_2m:gm3,t_apparent:C/${lat},${lng}/json?model=mix`,{headers: headers
            });
            const result = await res.json();
            setApiData(result);

            setSearch(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        if(placeData.results.length === 0){
          setError('Please enter a valid City');
        }
      }
    }
    fetchDataDos();
  }, [placeData])

  return (
    <>
      <div>
        {search ? <Result back={back} datos={apiData} lugar={apiPlace} /> : <Search error={error} place={place} />}
      </div>  
    </>
  )
}

export default App
