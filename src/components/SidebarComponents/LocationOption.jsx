import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLocationInfo } from '../../store/locationSlice';

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
    }
  };

  return (
    <div className='location-option'>
      <div className='-info'>
        <div className='-name' onClick={() => handleClick()}>
          <p>{city.city}</p>
        </div>
        <img src={`https://flagcdn.com/48x36/${city.country}.png`} className='location-flag' alt={`${city.country}Flag`}/>
      </div>
      <div className='-btns-container'>
        <button className='location-btn' id='location-select-btn'><AiOutlineRight /></button>
        <button className='location-btn' id='location-delete-btn'><AiOutlineClose /></button>
      </div>
    </div>
  )
}
