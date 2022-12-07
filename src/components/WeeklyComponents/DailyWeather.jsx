import { useSelector } from 'react-redux';
import { getTemperatureFormat, getWeatherImg, roundTemperature } from '../functions';

export default function DailyWeather({dayName, day, month, weatherCode, minTemp, maxTemp}) {
  const { isCelsius } = useSelector(store => store.temperature)

  return (
    <div className='day-weather'>
      <div className='dates'>
        <p>{dayName}, </p> <p>{day} {month}</p>
      </div>
      <div className='day-image'>
        <img src={getWeatherImg(weatherCode)} />
      </div>
      <div className='day-temperatures'>
        <p>{roundTemperature(minTemp)}°{getTemperatureFormat(isCelsius)}</p>
        <p>{roundTemperature(maxTemp)}°{getTemperatureFormat(isCelsius)}</p>
      </div>
    </div>
  )
}
