import DailyWeather from './DailyWeather';
import { useGetTodayWeatherQuery } from '../../apis/weatherApi';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getArrayOfDays } from '../functions';
import { setDailyWeather } from '../../store/weatherSlice';
import {v4 as uuid} from 'uuid';

export default function WeeklyWeather() {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((store) => store.locations.current.coords);
  const { timezone } = useSelector((store) => store.locations.current);
  const { isCelsius } = useSelector((store) => store.temperature);
  const { dailyWeather } = useSelector((store) => store.weather);
  const { data: dailyWeatherData, isSuccess } = useGetTodayWeatherQuery({latitude, longitude, timezone, isCelsius,});

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDailyWeather(getArrayOfDays(dailyWeatherData)));
    }
  }, [dailyWeatherData]);

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
