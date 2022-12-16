import DailyWeather from './DailyWeather';
import { useGetHourlyWeatherQuery, useGetTodayWeatherQuery } from '../../apis/weatherApi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getArrayOfDays } from '../functions';
import { setDailyWeather } from '../../store/weatherSlice';
import {v4 as uuid} from 'uuid';

export default function WeekWeather() {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((store) => store.locations.current.coords);
  const { timezone } = useSelector((store) => store.locations.current);
  const { isCelsius } = useSelector((store) => store.temperature);
  const { dailyWeather } = useSelector((store) => store.weather);
  const { data: dailyWeatherData, isSuccess, isLoading, isFetching } = useGetTodayWeatherQuery({latitude, longitude, timezone, isCelsius}, {
    pollingInterval: 180000,
  });

  //This is for get the cache and then do not need to fetch when user clicks in hourly weather
  const {data: hourly} = useGetHourlyWeatherQuery({latitude, longitude, isCelsius, timezone});

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDailyWeather(getArrayOfDays(dailyWeatherData)));
    }
  }, [dailyWeatherData]);

  if (isLoading || isFetching) {
    return (
      <div className='daily-weather-loading'>
        <p>Loading weather...</p>
      </div>
    )
  }

  return (
    <div className="weather-list-container">
      {dailyWeather.map((singleDay) => (
        <DailyWeather
          day={singleDay.day}
          dayName={singleDay.dayName}
          month={singleDay.month}
          minTemp={singleDay.minTemp}
          maxTemp={singleDay.maxTemp}
          weatherCode={singleDay.weatherCode}
          key={uuid()}
        />
      ))}
    </div>
  );
}
