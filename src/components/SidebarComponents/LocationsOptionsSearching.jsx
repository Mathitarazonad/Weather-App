import {v4 as uuid} from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLocationInfo, setSearchedCitiesOptions, setIfSearchingCities, setSearchedCity, setCitiesOptions } from '../../store/locationSlice.js';
import { citiesAreNotEqual } from '../functions.js'

export default function LocationsOptionsSearching({isLoading}) {
  const dispatch = useDispatch();
  const cities = useSelector(store => store.locations.citiesOptions);
  const citiesSaved = useSelector(store => store.locations.searchedCitiesOptions)

  const handleClick = cityOption => {
    const {city, country_code, lat, lon, timezone, state} = cityOption;
    if (citiesAreNotEqual(citiesSaved, city, state)) {
      dispatch(setCurrentLocationInfo({city, country: country_code, latitude: lat, longitude: lon, timezone : timezone.name, stateName : state}));
      dispatch(setSearchedCitiesOptions({city, country: country_code, latitude: lat, longitude: lon, timezone : timezone.name, stateName : state}));
      dispatch(setIfSearchingCities(false));
      dispatch(setSearchedCity(''));
      dispatch(setCitiesOptions([]))
    }
  }

  return (
    <div className='locations-options-searching'>
      {isLoading ? <p>Searching for cities...</p> : cities.map(city => 
      <div className='searching-option' key={uuid()} onClick={() => handleClick(city)}>
        <div className='-info'>
          <h3>{city.city}</h3>
          <p>{city.state}</p>
        </div>
        <div className='-flag'>
          <img src={`https://flagcdn.com/48x36/${city.country_code}.png`} alt={city.country+'Flag'} />
        </div>
      </div>)}
    </div>
  )
}
