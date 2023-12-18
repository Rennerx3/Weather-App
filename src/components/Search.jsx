import React, {useState} from 'react';


const Search = ({error, place}) => {
    const [apiPlace, setApiPlace] = useState('');

    

    const handleChange = (e) => {
        setApiPlace(e.target.value);
    }

    const handleSearch = (e) => {
        place(apiPlace);
    }

    return ( 
        <div id="search" className={error ? 'is-active' : null}>
            <h3>Weather App</h3>
            <hr />
            <input onChange={handleChange} type="text" name="city" id="inputcity" placeholder="Enter city name" />
            {error ? <p className='error'>{error}</p> : null}
            <button onClick={handleSearch}>Search</button>
        </div>
     );
}
 
export default Search;