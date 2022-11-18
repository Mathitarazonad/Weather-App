import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'

export default function () {
  return (
    <div className='today-details'>
      <div className='today-wind'>
        <h3 className='details-titles'>Wind Status</h3>
        <p><b className='current-detail'>7</b>mph</p>
        <div className='wind-direction'>
          <FaLocationArrow className='wind-icon'/>
          <p>WSW</p>
        </div>
      </div>
      <div className='today-humidity'>
        <h3 className='details-titles'>Humidity</h3>
        <p className='current-detail'>84%</p>
        <div className='progress-bar-container'>
          <div className='percentage-points'>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className='progress-bar'></div>
          <p>%</p>
        </div>
      </div>
      <div className='today-visibility'>
        <h3 className='details-titles'>Visibility</h3>
        <p className='current-detail'>6,4</p><p>miles</p>
      </div>
      <div className='today-air-pressure'>
        <h3 className='details-titles'>Air Pressure</h3>
        <p className='current-detail'>998</p><p>mb</p>
      </div>
    </div>
  )
}
