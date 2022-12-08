import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';
import { MdClear } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setIfMenuOpen } from '../../store/menuSlice';

export default function LocationsMenu() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIfMenuOpen());
  };
 
  return (
    <div className='search-menu'>
      <MdClear className='close-icon' onClick={() => handleClose()}/>
      <form>  
        <div className='search-input'>
          <IoMdSearch className='search-icon'/>
          <input placeholder='search location'></input>
        </div>
        <button className='search-btn'>Search</button>
      </form>
      <div className='locations'>
        
      </div>
    </div>
  )
}
