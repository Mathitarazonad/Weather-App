import Clear from '../images/clear.png';
import MainlyClear from '../images/lightCloud.png';
import Cloudy from '../images/cloudy.png';
import Shower from '../images/Shower.png';
import LightRain from '../images/LightRain.png';
import HeavyRain from '../images/HeavyRain.png';
import Thunderstorm from '../images/Thunderstorm.png';
import ThunderHail from '../images/Thunder-hail.png'
import Snow from '../images/Snow.png';
import Sleet from '../images/Sleet.png';
import Fog from '../images/Fog.png';
import { chunk } from 'lodash';

export const getWeatherImg = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return Clear;
    case 1:
    case 2:
      return MainlyClear;
    case 3:
      return Cloudy;
    case 45:
    case 48:
      return Fog;
    case 51:
      return Shower;
    case 53:
    case 55:
      return Sleet;
    case 56:
    case 57:
      return Hail;
    case 61:
      return LightRain;
    case 63:
    case 65:
      return HeavyRain;
    case 66:
    case 67:
      return Sleet;
    case 71:
    case 73:
    case 75:
    case 77:
      return Snow;
    case 80:
      return Shower;
    case 81:
      return LightRain;
    case 82: 
      return HeavyRain;
    case 85:
    case 86:
      return Snow;
    case 95:
      return Thunderstorm;
    case 96:
    case 99:
      return ThunderHail;
  }
};

export const getWeatherCodeName = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return 'Clear';
    case 1:
    case 2:
      return 'Mainly Clear';
    case 3:
      return 'Cloudy';
    case 45:
    case 48:
      return 'Foggy';
    case 51:
      return 'Shower';
    case 53:
    case 55:
      return 'Sleet';
    case 56:
    case 57:
      return 'Hail';
    case 61:
      return 'Light Rain';
    case 63:
    case 65:
      return 'Heavy Rain';
    case 66:
    case 67:
      return 'Sleet';
    case 71:
    case 73:
    case 75:
    case 77:
      return 'Snow';
    case 80:
      return 'Shower';
    case 81:
      return 'Light Rain';
    case 82: 
      return 'Heavy Rain';
    case 85:
    case 86:
      return 'Snow';
    case 95:
      return 'Thunderstorm';
    case 96:
    case 99:
      return 'Thunderstorm with Hail';
  }
};

export const getArrayOfHours = (data) => {
  const arrayOfHours = [];
  const currentHourIndex = data.hourly.time.indexOf(data.current_weather.time);
  const hours = data.hourly.time.slice(currentHourIndex+1, currentHourIndex+16);
  const temperatures = data.hourly.temperature_2m.slice(currentHourIndex+1, currentHourIndex+16);
  const weatherCodes = data.hourly.weathercode.slice(currentHourIndex+1, currentHourIndex+16);

  for (let i = 0; i < hours.length; i++) {
    const newHour = {};
    newHour.hour = hours[i].slice(11,17);
    newHour.temperature = temperatures[i] >= 1 ? Math.round(temperatures[i]) : temperatures[i];
    newHour.weatherCode = weatherCodes[i]
    arrayOfHours.push(newHour);
  }
  
  return chunk(arrayOfHours, 5);
};

export const getDates = (date) => {
  const time = new Date(date).toString();
  const [hour, day, dayName, month] = [time.slice(16,21), time.slice(0,3), time.slice(8,10),time.slice(4,7)];
  return [hour, day, dayName, month];
}

export const getTemperatureFormat = (isCelsius) => {
  if (isCelsius) {
    return 'C'
  } else {
    return 'F'
  }
}

