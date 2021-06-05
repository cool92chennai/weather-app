import React, { useEffect, useState } from 'react';
import './css/style.css';
import PlacesAutocomplete from 'react-places-autocomplete';

const Tempapps = () => {
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('');
    
    useEffect(() => {

        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e9dd2ed694b216ea43b71ecd56f1a25`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    }, [search] )

    return (
        <>
        <div className='box'>
            <h3>Know The Temperature Of Any City Across Globe</h3>
            <div className='inputData'>
            <input type='search'
                value={search}
                className='inputField'
                searchOptions={{ types: ['locality', 'country'] }}
                onChange= {(event)=> {
                    setSearch(event.target.value);
                }}
                placeholder="Please enter city name"/>
            </div>

        {!city ? (
            <p className='errMsg'> No Data Found </p>
        ) : (
            <div>
            <div className="info" >
            <h2 className="location">
            <i className="fas fa-street-view"></i> {search} 
            </h2>
            <h3 className='temp'>
                {city.temp}°Cel
            </h3>
            <h3 className='temp'>
                {((city.temp*1.8)+32).toFixed(2)}°F
            </h3>
            <h3 className='tempmin_max'>
                    Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
            </h3>
            
        </div>

        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        </div>
        )

        }

        
        </div>
        </>

    )
};

export default Tempapps;