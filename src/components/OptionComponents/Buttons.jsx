import Temperatures from './Temperatures';
import ThemeBtn from './ThemeBtn';
import { useSelector, useDispatch } from 'react-redux';
import { VscSettingsGear } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import { setIfConfigurationState } from '../../store/menuSlice';

export default function Buttons() {
  const dispatch = useDispatch();
  const { configurationsAreOpen } = useSelector((store) => store.menu);

  const handleConfigurations = () => {
    dispatch(setIfConfigurationState());
  };

  return (
    <section
      className={
        configurationsAreOpen
          ? 'buttons-section configurations-open'
          : 'buttons-section'
      }
    >
      <Temperatures />
      <ThemeBtn />
      {!configurationsAreOpen ? (
        <VscSettingsGear
          className="configurations-icon"
          onClick={() => handleConfigurations()}
        />
      ) : (
        <AiOutlineClose
          className="configurations-close-icon"
          onClick={() => handleConfigurations()}
        />
      )}
    </section>
  );
}
