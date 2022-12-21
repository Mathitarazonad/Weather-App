import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLocationInfo, deleteSearchedCityOption } from '../../store/locationSlice';
import { setIfMenuOpen } from '../../store/menuSlice';

export default function LocationOption({city}) {
  const dispatch = useDispatch();
  const {city: currentCity, stateName} = useSelector(store => store.locations.current);
  
  const handleClick = () => {
    if(currentCity !== city.city && stateName !== city.stateName) {
      dispatch(setCurrentLocationInfo({
        city : city.city,
        stateName : city.stateName,
        country : city.country,
        timezone: city.timezone,
        latitude: city.latitude,
        longitude: city.longitude
      }));
      dispatch(setIfMenuOpen());
    }
  };

  const handleDelete = city => {
    dispatch(deleteSearchedCityOption(city));
  }

  return (
    <div className='location-option'>
      <div className='-info'>
        <div className='-name' onClick={() => handleClick()}>
          <p>{city.city}</p>
          <p>{city.stateName}</p>
        </div>
        <img src={`https://flagcdn.com/48x36/${city.country}.png`} className='location-flag' alt={`${city.country}Flag`}/>
      </div>
      <div className='-btns-container'>
        <button className='location-btn' id='location-select-btn'><AiOutlineRight /></button>
        <button className='location-btn' id='location-delete-btn' onClick={() => handleDelete(city.city)}><AiOutlineClose /></button>
      </div>
    </div>
  )
}
