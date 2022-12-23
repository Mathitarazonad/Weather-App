import { useSelector, useDispatch } from 'react-redux';
import { setDailyWeatherMode } from '../../store/weatherSlice';

export default function WeatherOptions() {
  const isDailyWeatherOn = useSelector(store => store.weather.dailyWeatherMode);
  const dispatch = useDispatch();

  const handleClick = (mode) => {
    if (mode !== isDailyWeatherOn) {
      dispatch(setDailyWeatherMode(mode))
    }
  };

  return (
    <div className="weather-mode-btns-container">
      <button className={isDailyWeatherOn ? 'weather-mode-btn selected' : 'weather-mode-btn'} onClick={() => handleClick(true)}>Daily</button>
      <button className={!isDailyWeatherOn ? 'weather-mode-btn selected' : 'weather-mode-btn'} onClick={() => handleClick(false)}>Hourly</button>
    </div>
  );
}
