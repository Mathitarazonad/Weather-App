import LocationsMenu from "./components/OptionComponents/LocationsMenu";
import Temperatures from "./components/OptionComponents/Temperatures";
import TodayWeather from "./components/TodayWeather";

function App() {

  return (
    <div className="App">
      <TodayWeather />
      <LocationsMenu />
      <Temperatures />
    </div>
  );
}

export default App;
