import {v4 as uuid} from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLocationInfo, setSearchedCitiesOptions, setIfSearchingCities, setSearchedCity, setCitiesOptions } from '../../store/locationSlice.js';
import { setIfMenuOpen } from '../../store/menuSlice.js';
import { citiesAreNotEqual } from '../functions.js'

export default function LocationsOptionsSearching({isLoading, cities}) {
  const dispatch = useDispatch();
  const citiesSaved = useSelector(store => store.locations.searchedCitiesOptions)

  const handleClick = cityOption => {
    let {city, country_code, lat, lon, timezone, state} = cityOption;
    city = city ? city : state;
    if (citiesAreNotEqual(citiesSaved, city, state)) {
      dispatch(setCurrentLocationInfo({city: city ? city : state, country: country_code, latitude: lat, longitude: lon, timezone : timezone.name, stateName : state}));
      dispatch(setSearchedCitiesOptions({city:  city ? city : state, country: country_code, latitude: lat, longitude: lon, timezone : timezone.name, stateName : state}));
      dispatch(setIfSearchingCities(false));
      dispatch(setIfMenuOpen());
      dispatch(setSearchedCity(''));
      dispatch(setCitiesOptions([]))
    }
  }

  if (isLoading) {
    return (
    <div className='locations-options-loading'>
      <p>Searching for cities...</p>
    </div>
    )
  }

  else if (cities.length === 0) {
    return <div className='no-cities-found'>No cities found</div>
  }

  return (
    <div className='locations-options-searching'>
      {cities.map(city => 
      <div className='searching-option' key={uuid()} onClick={() => handleClick(city)}>
        <div className='-info'>
          <h3>{city.city ? city.city : city.state}</h3>
          {city.state && <p>{city.state}</p>}
        </div>
        <div className='-flag'>
          <img src={`https://flagcdn.com/48x36/${city.country_code}.png`} alt={city.country+'Flag'} />
        </div>
      </div>)}
    </div>
  )
}
