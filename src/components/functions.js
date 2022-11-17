import Clear from '../images/Clear.png';
import MainlyClear from '../images/LightCloud.png';
import Cloudy from '../images/HeavyCloud.png';
import Shower from '../images/Shower.png';
import LightRain from '../images/LightRain.png';
import HeavyRain from '../images/HeavyRain.png';
import Thunderstorm from '../images/Thunderstorm.png';
import Snow from '../images/Snow.png';
import Hail from '../images/Hail.png';
import Sleet from '../images/Sleet.png';
import Fog from '../images/Fog.png';

export const getWeatherImg = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return Clear;
    case 1:
      return MainlyClear;
    case 2:
    case 3:
      return Cloudy;
    case 45:
    case 48:
      return Fog;
    case 51:
      return Shower;
    case 53:
    case 55:
      return LightRain;
    case 56:
    case 57:
      return Sleet;
    case 61:
      return LightRain;
    case 63:
    case 65:
      return HeavyRain;
    case 66:
    case 67:
      return Hail;
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
      return Hail;
  }
}
