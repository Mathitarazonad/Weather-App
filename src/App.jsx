import { useSelector } from 'react-redux';
import HourlyWeather from './components/HourlyComponents/HourlyWeather';
import Buttons from './components/OptionComponents/Buttons';
import Temperatures from './components/OptionComponents/Temperatures';
import WeatherOptions from './components/OptionComponents/WeatherOptions';
import Sidebar from './components/SidebarComponents/Sidebar';
import TodayDetails from './components/TodayComponents/TodayDetails';
import WeekWeather from './components/WeeklyComponents/WeekWeather';
import './sass/main.css';

function App() {

  const { dailyWeatherMode } = useSelector(store => store.weather);
  const { isDarkMode } = useSelector(store => store.theme);
  const { menuIsOpen } = useSelector(store => store.menu);

  return (
    <div className={isDarkMode ? 'App' : 'App light-mode'}>
      <main className='main-container'>
        <Sidebar />
        <section className={menuIsOpen ? 'weather-section open-menu' : 'weather-section'}>
          <Buttons />
          <WeatherOptions />
          {dailyWeatherMode ? <WeekWeather /> : <HourlyWeather />}
          <TodayDetails />
          <footer>Created by <a href='#'><b>MathiTarazonad</b></a> - Challenge from <a href='#'><b>devChallenges.io</b></a></footer>
        </section>
      </main>
      
    </div>
  );
}

export default App;
