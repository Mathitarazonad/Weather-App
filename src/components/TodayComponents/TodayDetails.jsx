import { FaLocationArrow } from 'react-icons/fa';
import { useGetTodaysDetailsQuery } from '../../apis/weatherApi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTodayDetails } from '../../store/weatherSlice';
import { getCompassDirection, getTemperatureFormat, roundTemperature } from '../functions';

export default function () {
  const dispatch = useDispatch();
  const {latitude, longitude} = useSelector(store => store.locations.current.coords);
  const {timezone} = useSelector(store => store.locations.current);
  const {isCelsius} = useSelector(store => store.temperature);
  const {humidity, visibility, windSpeed, windDirection, apparentTemperature} = useSelector(store => store.weather.todayWeather.details);
  const {data: todayDetailsData, isSuccess} = useGetTodaysDetailsQuery({latitude, longitude, timezone, isCelsius});

  useEffect(() => {
    if (isSuccess) {
      const currentHourIndex = todayDetailsData.hourly.time.indexOf(todayDetailsData.current_weather.time);
      dispatch(setTodayDetails({
        humidity: todayDetailsData.hourly.relativehumidity_2m[currentHourIndex],
        visibility: todayDetailsData.hourly.visibility[currentHourIndex]/1000,
        windSpeed: todayDetailsData.current_weather.windspeed,
        windDirection: todayDetailsData.current_weather.winddirection,
        apparentTemperature: todayDetailsData.hourly.apparent_temperature[currentHourIndex]
      }))
    }
  }, [todayDetailsData]);

  if (isSuccess) {
    return (
    <div className='today-details'>
      <h2>Current Weather Details</h2>
      <div className='current-wind'>
        <h3 className='details-titles'>Wind Status</h3>
        <p><b className='current-detail'>{(windSpeed)}</b>km/h</p>
        <div className='wind-direction'>
          <FaLocationArrow className='wind-icon'/>
          <p>{getCompassDirection(windDirection)}</p>
        </div>
      </div>
      <div className='current-humidity'>
        <h3 className='details-titles'>Humidity</h3>
        <p className='current-detail'>{humidity}%</p>
        <div className='progress-bar-container'>
          <div className='percentage-points'>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className='progress-bar'></div>
          <p>%</p>
        </div>
      </div>
      <div className='current-visibility'>
        <h3 className='details-titles'>Visibility</h3>
        <p className='current-detail'>{visibility >= 1 ? Math.round(visibility) : (visibility)}</p><p>km</p>
      </div>
      <div className='current-apparent-temperature'>
        <h3 className='details-titles'>Apparent Temperature</h3>
        <p className='current-detail'>{roundTemperature(apparentTemperature)}°</p><p>{getTemperatureFormat(isCelsius)}</p>
      </div>
    </div>
    )
  }
}
