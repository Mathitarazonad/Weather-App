import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentHourlyPageSelected } from '../../store/weatherSlice';

export default function HourlyButtons() {
  const dispatch = useDispatch();
  const {hourlyPageSelected : currentPage} = useSelector(store => store.weather);

  const handleNextPage = () => {
    if (currentPage != 2) {
      dispatch(setCurrentHourlyPageSelected(currentPage+1));
    } else {
      dispatch(setCurrentHourlyPageSelected(0));
    }
  }

  const handlePreviousPage = () => {
    if (currentPage != 0) {
      dispatch(setCurrentHourlyPageSelected(currentPage-1));
    } else {
      dispatch(setCurrentHourlyPageSelected(2));
    }
  }

  return (
    <div className='hourly-btns-container'>
      <button onClick={() => handlePreviousPage()} className='hourly-btn'  id='hourly-back-btn'><AiFillCaretLeft /></button>
      <button onClick={() => handleNextPage()} className='hourly-btn' id='hourly-next-btn'><AiFillCaretRight /></button>
    </div>
  )
}
