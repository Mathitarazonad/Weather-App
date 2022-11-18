import React from 'react'
import DailyWeather from './DailyWeather'

export default function WeeklyWeather() {
  return (
    <div className='weather-list-container'>
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
    </div>
  )
}
