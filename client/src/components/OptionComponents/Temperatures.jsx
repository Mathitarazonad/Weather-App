import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIfCelsius } from '../../store/temperatureSlice';

export default function Temperatures() {
  const dispatch = useDispatch();
  const isCelsius = useSelector((store) => store.temperature.isCelsius);

  const handleTemperature = (temp) => {
    if (temp === 'C' && !isCelsius) {
      dispatch(setIfCelsius());
    } else if (temp === 'F' && isCelsius) {
      dispatch(setIfCelsius());
    }
  };

  return (
    <div className="temperatures-container">
      <button
        className={isCelsius ? 'temperature selected' : 'temperature'}
        id="celsius"
        onClick={() => handleTemperature('C')}
      >
        °C
      </button>
      <button
        className={!isCelsius ? 'temperature selected' : 'temperature'}
        id="fahrenheit"
        onClick={() => handleTemperature('F')}
      >
        °F
      </button>
    </div>
  );
}
