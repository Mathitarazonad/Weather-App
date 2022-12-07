import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//React icons
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillRecordFill } from 'react-icons/bs';
import { IoIosPin } from 'react-icons/io';
//Bg
import CloudBackground from '../images/Cloud-background.png';
//Functions
import { getDates, getTemperatureFormat, getWeatherCodeName, getWeatherImg } from './functions';
//Hooks of RTK Query
import { useGetTodayWeatherQuery } from '../apis/weatherApi';
import { useGetLocationByCoordsQuery } from '../apis/locationsApi';
//Reducers from slices
import { setIfMenuOpen } from '../store/menuSlice';
import { setCurrentWeather } from '../store/weatherSlice';
import { setCurrentCoords, setCurrentLocationInfo, setCurrentTime } from '../store/locationSlice';

export default function TodayWeather() {
  const dispatch = useDispatch();

  //Location info
  const {timezone, city} = useSelector(store => store.locations.current);
  const {hour, day, dayName, month} = useSelector(store => store.locations.current.time);
  const {latitude, longitude} = useSelector(store => store.locations.current.coords);

  //Weather variables and temperature selected
  const {isCelsius} = useSelector(store => store.temperature);
  const {currentTemperature, min :minTemp, max :maxTemp} = useSelector(store => store.weather.todayWeather.temperatures);
  const {weatherCode} = useSelector(store => store.weather.todayWeather);

  //RTK Query endpoints calls
  const {data: weatherInfo, isSuccess: successWeather} = useGetTodayWeatherQuery({latitude,longitude,isCelsius,timezone}, {
    pollingInterval : 60000,
  });
  const {data: currentLocationInfo , isSuccess: successLocation} = useGetLocationByCoordsQuery({latitude, longitude});


  useEffect(() => {
    if (successWeather) {
      dispatch(setCurrentWeather({
        currentTemp: weatherInfo.current_weather.temperature,
        min: weatherInfo.daily.temperature_2m_min[0],
        max: weatherInfo.daily.temperature_2m_max[0],
        weatherCode : weatherInfo.current_weather.weathercode
      }));
      const [hour, day, dayName, month] = getDates(weatherInfo.current_weather.time)
      dispatch(setCurrentTime({hour, day, dayName, month}));
    } 
  }, [successWeather, weatherInfo]);

  useEffect(() => {
    if(successLocation) {
      const {city, country_code, timezone, lat, lon} = currentLocationInfo.features[0].properties;
      dispatch(setCurrentLocationInfo({
        city,
        country : country_code,
        latitude : lat,
        longitude : lon,
        timezone : timezone.name,
      }));
    }
  }, [currentLocationInfo]);

  //Event handlers and funcs
  const handleClick = () => {
    dispatch(setIfMenuOpen());
  };

  const handleGetPosition = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updatePositionInfo)
    }
  };

  const updatePositionInfo = (pos) => {
    if (Math.round(pos.coords.latitude) !== Math.round(latitude) && Math.round(pos.coords.longitude) !== Math.round(longitude)) {
      dispatch(setCurrentCoords({
        latitude : pos.coords.latitude,
        longitude : pos.coords.longitude
      }))
    }
  };

  return (
    <div className='today-weather-menu'>
      <div className='__locations-btns'>
        <button className='search-btn' onClick={() => handleClick()}>
          Search for places
        </button>
        <button className='get-position-btn' onClick={() => handleGetPosition()}>
          <BiCurrentLocation />
        </button>
      </div>
      {successWeather ? <> <div className='__images'>
        <img src={CloudBackground} alt='cloudBackground' className='-background'/>
        <img src={getWeatherImg(weatherCode)} alt='-currentWeather' className='current-weather'/>
      </div>
      <div className='__information'>
        <div className='-today-temperatures'>
          <div className='current-temperature'>
            <p>{currentTemperature >= 1 ? Math.round(currentTemperature) : currentTemperature}</p> <p>°{getTemperatureFormat(isCelsius)}</p>
          </div>
          <div className='min-max-temperature'>
            <p>{minTemp >= 1 ? Math.round(minTemp) : minTemp}°{getTemperatureFormat(isCelsius)}</p>
            <p>/</p>
            <p>{maxTemp >= 1 ? Math.round(maxTemp) : maxTemp}°{getTemperatureFormat(isCelsius)}</p>
          </div>
        </div>
        <h2>{getWeatherCodeName(weatherCode)}</h2>
        <div className='-current-details'>
          <div className='-dates'>
            <p>Today</p>
            <BsFillRecordFill />
            <p>{dayName}, {day} {month}</p>
            <BsFillRecordFill />
            <p>{hour}</p>
          </div>
          <div className='-location'>
            <IoIosPin />
            <p>{city}</p>
          </div>
        </div>
      </div></> : 
      <div className='today-weather-loading'>
        <h2>Loading...</h2>
      </div>}
    </div>
  )
}
