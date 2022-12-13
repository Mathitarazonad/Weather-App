import React, {useEffect} from 'react';
import { IoMdSearch } from 'react-icons/io';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setIfMenuOpen } from '../../store/menuSlice';
import LocationsOptionsSearching from './LocationsOptionsSearching';
import LocationOption from './LocationOption';
import { useGetLocationByCityQuery } from '../../apis/locationsApi';
import { setCitiesOptions, setIfSearchingCities, setSearchedCity } from '../../store/locationSlice';
import {v4 as uuid} from 'uuid';

export default function LocationsMenu() {
  const dispatch = useDispatch();
  const searchedCity = useSelector(store => store.locations.searchedCity)
  const searchedCitiesOptions = useSelector(store => store.locations.searchedCitiesOptions);
  const citiesOptions = useSelector(store => store.locations.citiesOptions)
  const isSearchingCities = useSelector(store => store.locations.isSearchingCities);

  const {data: foundCitiesData, isSuccess, isLoading} = useGetLocationByCityQuery(searchedCity, {skip:!isSearchingCities});

  const handleClose = () => {
    dispatch(setIfMenuOpen());
  };

  const handleChange = e => {
    if(e.target.value.length >= 3) {
      dispatch(setSearchedCity(e.target.value))
    } else {
      dispatch(setSearchedCity(e.target.value))
      dispatch(setIfSearchingCities(false));
    }
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    if (searchedCity.length >= 3) {
      dispatch(setIfSearchingCities(true))
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCitiesOptions(foundCitiesData.features.map(feature => feature.properties)))
    }
  }, [foundCitiesData] )
  

  return (
    <div className='search-menu'>
      <div className='close-icon'>
        <MdClear onClick={() => handleClose()}/>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className='search-form'>  
        <div className='search-input'>
          <IoMdSearch className='search-icon'/>
          <input value={searchedCity} type='text' placeholder='search location' onChange={(e) => handleChange(e)} />
        </div>
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {searchedCitiesOptions.length >= 1 && !isSearchingCities ? 
      <div className='locations-options-searched'>
        {searchedCitiesOptions.map(city => <LocationOption city={city} key={uuid()}/>)}
      </div> : <LocationsOptionsSearching isLoading={isLoading} cities={citiesOptions}/>}
    </div>
  )
}
