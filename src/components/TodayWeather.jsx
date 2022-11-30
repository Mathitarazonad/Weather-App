import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillRecordFill } from 'react-icons/bs';
import { IoIosPin } from 'react-icons/io';
import CloudBackground from '../images/Cloud-background.png';
import { getWeatherImg } from './functions';
import { useDispatch } from 'react-redux';
import { setIfMenuOpen } from '../store/menuSlice';

export default function TodayWeather() {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(setIfMenuOpen());
  }

  return (
    <div className='today-weather-menu'>
      <div className='__locations-btns'>
        <button className='search-btn' onClick={() => handleClick()}>
          Search for places
        </button>
        <button className='get-position-btn'>
          <BiCurrentLocation />
        </button>
      </div>
      <div className='__images'>
        <img src={CloudBackground} alt='cloudBackground' className='-background'/>
        <img src={getWeatherImg(0)} alt='-currentWeather' className='current-weather'/>
      </div>
      <div className='__information'>
        <div className='-current-temperature'>
          <p>1</p><p>5</p><p>°C</p>
        </div>
        <h2>Clear</h2>
        <div className='-current-details'>
          <div className='-dates'>
            <p>Today</p>
            <BsFillRecordFill />
            <p>Fri, 5 Jun</p>
            <BsFillRecordFill />
            <p>17:00</p>
          </div>
          <div className='-location'>
            <IoIosPin />
            <p>Helsinki</p>
          </div>
        </div>
      </div>
    </div>
  )
}
