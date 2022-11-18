import React from 'react'

export default function Temperatures() {
  return (
    <div className='temperatures-container'>
      <button className='temperature' id='celsius'>
        °C
      </button>
      <button className='temperature' id='fahrenheit'>
        °F
      </button>
    </div>
  )
}
