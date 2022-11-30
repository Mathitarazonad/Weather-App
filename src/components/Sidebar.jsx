import React from 'react';
import { useSelector } from 'react-redux';
import LocationsMenu from './OptionComponents/LocationsMenu';
import TodayWeather from './TodayWeather';

export default function Sidebar() {
  const isMenuOpen = useSelector((store) => store.menu.menuIsOpen);

  return (
    <div className="sidebar">
      {isMenuOpen ? <LocationsMenu /> : <TodayWeather />}
    </div>
  );
}