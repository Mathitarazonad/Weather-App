import React from 'react';

export default function DailyWeather() {
  return (
    <div className='day-weather'>
      <div className='dates'>
        <p>Sun, </p>
        <p>7 Jun</p>
      </div>
      <div className='day-image'>
        <img src='../images/Clear.png' />
      </div>
      <div className='day-temperatures'>
        <p>16°C</p>
        <p>11°C</p>
      </div>
    </div>
  )
}
