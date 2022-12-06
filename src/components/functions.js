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
}

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
}

