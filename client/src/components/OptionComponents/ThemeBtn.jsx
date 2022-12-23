import { FaRegMoon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setIfDarkMode } from '../../store/themeSlice';

export default function ThemeBtn() {

  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(setIfDarkMode());
  }

  return (
    <div className='theme-btn-container' onClick={() => handleThemeChange()}>
      <FaRegMoon className='theme-icon' />
    </div>
  )
}
