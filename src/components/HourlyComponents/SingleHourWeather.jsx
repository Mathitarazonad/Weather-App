import { useSelector } from 'react-redux';
import { getWeatherImg, getTemperatureFormat } from '../functions';

export default function SingleHourWeather({hour, weatherCode, temperature}) {
  const isCelsius = useSelector(store => store.temperature.isCelsius);

  return (
    <div className='single-hour-weather-container'>
      <h3>{hour}</h3>
      <img className='hour-weather-img' src={getWeatherImg(weatherCode)} style={{width:80}}/>
      <p>{temperature}°{getTemperatureFormat(isCelsius)}</p>
    </div>
  );
}
