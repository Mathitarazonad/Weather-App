import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//React icons
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillRecordFill } from 'react-icons/bs';
import { IoIosPin } from 'react-icons/io';
//Bg
import CloudBackground from '../../images/Cloud-background.png';
import LightBackground from '../../images/Light-background.png';
//Functions
import { citiesAreNotEqual, compareCoords, getDates, getTemperatureFormat, getWeatherCodeName, getWeatherImg, roundTemperature } from '../functions';
//Hooks of RTK Query
import { useGetTodayWeatherQuery } from '../../apis/weatherApi';
import { useGetLocationByCoordsQuery } from '../../apis/locationsApi';
//Reducers from slices
import { setIfMenuOpen } from '../../store/menuSlice';
import { setCurrentWeather } from '../../store/weatherSlice';
import { setCurrentCoords, setCurrentLocationInfo, setCurrentTime, setSearchedCitiesOptions } from '../../store/locationSlice';

export default function TodayWeather() {
  const dispatch = useDispatch();

  //Location info
  const {timezone, city: cityName} = useSelector(store => store.locations.current);
  const {hour, day, dayName, month} = useSelector(store => store.locations.current.time);
  const {latitude, longitude} = useSelector(store => store.locations.current.coords);
  const {searchedCitiesOptions} = useSelector(store => store.locations);

  //Weather variables and temperature selected
  const {isCelsius} = useSelector(store => store.temperature);
  const {currentTemperature} = useSelector(store => store.weather.todayWeather.temperatures);
  const {weatherCode} = useSelector(store => store.weather.todayWeather);
  const {isDarkMode} = useSelector(store => store.theme);

  //RTK Query endpoints calls
  const {data: weatherInfo, isSuccess: successWeather, isFetching: fetchingWeather} = useGetTodayWeatherQuery({latitude,longitude,isCelsius,timezone}, {
    pollingInterval : 60000,
  });
  const {data: currentLocationInfo , isSuccess: successLocation, isFetching: fetchingLocation} = useGetLocationByCoordsQuery({latitude, longitude});

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
      let {city, country_code, timezone, lat, lon, state: stateName} = currentLocationInfo.features[0].properties;
      city = city ? city : stateName;
      dispatch(setCurrentLocationInfo({
        city,
        country : country_code,
        latitude : lat,
        longitude : lon,
        timezone : timezone.name,
        stateName,
      }));

      if(citiesAreNotEqual(searchedCitiesOptions, city, stateName, lat, lon)) {
        dispatch(setSearchedCitiesOptions({
          city,
          country : country_code,
          timezone: timezone.name,
          latitude : lat,
          longitude : lon,
          stateName,
        }))
      }  
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
    if (compareCoords(latitude, longitude, pos.coords.latitude, pos.coords.longitude)) {
      dispatch(setCurrentCoords({
        latitude : pos.coords.latitude,
        longitude : pos.coords.longitude
      }));
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
        <img src={isDarkMode ? CloudBackground : LightBackground} alt='cloudBackground' className='-background'/>
        {fetchingWeather || fetchingLocation ? <div className='loading-today-weather'></div> :<img src={getWeatherImg(weatherCode, hour)} alt='-currentWeather' className='current-weather'/>}
      </div>
      <div className='__information'>
        <div className='current-temperature'>
            <p>{roundTemperature(currentTemperature)}</p> <p>??{getTemperatureFormat(isCelsius)}</p>
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
            <p>{cityName}</p>
          </div>
        </div>
      </div></> : 
      <div className='loading'>
        <h2>Loading...</h2>
      </div>}
    </div>
  )
}
