import { AiFillCaretRight, AiOutlineCloseCircle } from 'react-icons/ai';

export default function LocationOption({location}) {
  return (
    <div className='location-option'>
      <div className='location-info'>
        <div className='location-info-text'>
          <p>{location.city}</p>
          <p>{location.state}</p>
        </div>
        <img src={`https://flagcdn.com/48x36/${location.country_code}.png`} className='location-flag'/>
      </div>
      <div className='location-btns-container'>
        <button className='location-btn' id='location-select-btn'><AiFillCaretRight /></button>
        <button className='location-btn' id='location-delete-btn'><AiOutlineCloseCircle /></button>
      </div>
    </div>
  )
}
