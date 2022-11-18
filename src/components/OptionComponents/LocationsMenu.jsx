import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';

export default function LocationsMenu() {
  return (
    <div className='search-menu'>
      <MdClear className='close-icon'/>
      <form>  
        <div className='search-input'>
          <IoMdSearch className='search-icon'/>
          <input placeholder='search location'></input>
        </div>
        <button className='search-btn'>Search</button>
      </form>
      <div className='locations'>
        <div className='single-location'>
          <p>London</p>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  )
}
