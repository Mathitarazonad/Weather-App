import { AiFillCaretRight, AiOutlineCloseCircle } from 'react-icons/ai';
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
      <div className='location-info'>
        <div className='location-info-text' onClick={() => handleClick()}>
          <p>{city.city}</p>
          <p>State - {city.stateName}</p>
        </div>
        <img src={`https://flagcdn.com/48x36/${city.country}.png`} className='location-flag'/>
      </div>
      <div className='location-btns-container'>
        <button className='location-btn' id='location-select-btn'><AiFillCaretRight /></button>
        <button className='location-btn' id='location-delete-btn'><AiOutlineCloseCircle /></button>
      </div>
    </div>
  )
}
