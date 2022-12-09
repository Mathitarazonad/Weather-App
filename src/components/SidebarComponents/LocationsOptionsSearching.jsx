import {v4 as uuid} from 'uuid';
import { useSelector } from 'react-redux';

export default function LocationsOptionsSearching({isLoading}) {
  const cities = useSelector(store => store.locations.citiesOptions);
  return (
    <div className='locations-options-searching'>
      {isLoading ? <p>Searching for cities...</p> : cities.map(city => 
      <div className='searching-option' key={uuid()}>
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
