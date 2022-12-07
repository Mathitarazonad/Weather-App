import { useGetHourlyWeatherQuery } from '../../apis/weatherApi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getArrayOfHours } from '../functions';
import { setHourlyWeather } from '../../store/weatherSlice';
import SingleHourWeather from './SingleHourWeather';
import {v4 as uuidv4} from 'uuid';
import HourlyButtons from './HourlyButtons';

export default function HourlyWeather() {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((store) => store.locations.current.coords);
  const { timezone } = useSelector((store) => store.locations.current);

  const { hourlyWeather } = useSelector((store) => store.weather);
  const { isCelsius } = useSelector((store) => store.temperature);
  const { hourlyPageSelected } = useSelector((store) => store.weather);

  const {
    data: hourlyInfo,
    isSuccess,
    isLoading,
  } = useGetHourlyWeatherQuery({ latitude, longitude, timezone, isCelsius });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setHourlyWeather(getArrayOfHours(hourlyInfo)));
    }
  }, [hourlyInfo]);

  if (isLoading) {
    return <div className='hourly-weather-loading'>Loading Weather...</div>;
  } else if (isSuccess) {
    return (
      <div className='hourly-weather-container'>
        <HourlyButtons />
        {hourlyWeather.map((hourArr, index) => (
          <div className={index === hourlyPageSelected ? 'hourly-array _selected' : 'hourly-array'} key={uuidv4()}>
            {hourArr.map((hour) => (
              <SingleHourWeather
                hour={hour.hour}
                temperature={hour.temperature}
                weatherCode={hour.weatherCode}
                key={uuidv4()}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
