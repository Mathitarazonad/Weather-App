import { useSelector } from 'react-redux';
import { getWeatherImg, getTemperatureFormat, roundTemperature } from '../functions';

export default function SingleHourWeather({hour, weatherCode, temperature}) {
  const isCelsius = useSelector(store => store.temperature.isCelsius);

  return (
    <div className='single-hour-weather-container'>
      <h3>{hour}</h3>
      <img className='hour-weather-img' src={getWeatherImg(weatherCode, hour)} />
      <p>{roundTemperature(temperature)}°{getTemperatureFormat(isCelsius)}</p>
    </div>
  );
}
