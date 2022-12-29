//Day images
import Clear from '../images/clear.png';
import MainlyClear from '../images/lightCloud.png';
import Shower from '../images/Shower.png';

//Night images
import NightClear from '../images/NightClear.png';
import NightMainlyClear from '../images/nightCloud.png';

//Neutral images
import Cloudy from '../images/cloudy.png';
import LightRain from '../images/LightRain.png';
import HeavyRain from '../images/HeavyRain.png';
import Thunderstorm from '../images/Thunderstorm.png';
import ThunderHail from '../images/Thunder-hail.png'
import Snow from '../images/Snow.png';
import Sleet from '../images/Sleet.png';
import Fog from '../images/Fog.png';

//
import { chunk } from 'lodash';

export const getWeatherImg = (weatherCode, hour = '09:00') => {
  const currentHour = parseInt(hour.slice(0, 2));

  if(currentHour >= 5 && currentHour <= 18) {
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
  } else {
    switch (weatherCode) {
      case 0:
        return NightClear;
      case 1:
      case 2:
        return NightMainlyClear;
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
  const [hour, day, dayName, month] = [time.slice(16,21), time.slice(8,10), time.slice(0, 3),time.slice(4,7)];
  return [hour, day, dayName, month];
}

export const getTemperatureFormat = (isCelsius) => {
  if (isCelsius) {
    return 'C'
  } else {
    return 'F'
  }
}

export const roundTemperature = (temperature) => {
  if(temperature >= 1) {
    return Math.round(temperature);
  } else {
    return temperature
  }
}

export const getArrayOfDays = (data) => {
  const arrOfDays = [];
  const days = data.daily.time.slice(0, 5);
  const weatherCodes = data.daily.weathercode;
  const minTemps = data.daily.temperature_2m_min;
  const maxTemps = data.daily.temperature_2m_max;

  for (let i = 0; i < days.length; i++) {
    let newDay = {};
    const [, day, dayName, month] = getDates(`${days[i]}T00:00`);
    newDay = {
      day,
      dayName : i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : dayName,
      month,
      minTemp: minTemps[i],
      maxTemp: maxTemps[i],
      weatherCode: weatherCodes[i]
    };
    arrOfDays.push(newDay);
  }
  return arrOfDays;
}

export const getCompassDirection = (deg) => {
  const val = Math.round(deg / 22.5);
  const compassDirections=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
  return (compassDirections[(val % 16)])
}

export const citiesAreNotEqual = (cities, city, stateName, lat, lon) => {
  for (let i = 0; i < cities.length; i++) {
    if ((cities[i].city === city && cities[i].stateName === stateName) || (cities[i].latitude === lat && cities[i.longitude === lon])) {
      return false;
    }
  }
  return true;
}

export const compareCoords = (currentLat, currentLon, newLat, newLon) => {
  return (
    (Math.round((currentLat + Number.EPSILON) * 100) / 100 !== Math.round((newLat + Number.EPSILON) * 100) / 100) &&
    (Math.round((currentLon + Number.EPSILON) * 100) / 100 !== Math.round((newLon + Number.EPSILON) * 100) / 100)
    )
}

