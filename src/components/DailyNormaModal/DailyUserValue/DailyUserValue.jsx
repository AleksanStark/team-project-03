import { useEffect, useState } from 'react';
import style from './DailyUserValue.module.css';
import { useDispatch } from 'react-redux';
import { addWaterRecord } from '../../../redux/water/operations.js';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../../redux/water/slice.js';

const DailyUserValue = ({ closeModal }) => {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState();

  const handleClick = () => {
    const record = { date: new Date().toISOString(), volume: +userValue };
    setIsFirstOpen(false);
    dispatch(addWaterRecord(record));
  };

  useEffect(() => {
    if (!isFirstOpen && !isLoading && !error) {
      closeModal();
    } else if (!isFirstOpen && !isLoading && error) {
      console.log(error);
    }
  }, [isLoading, error, closeModal, isFirstOpen]);

  return (
    <div className={style.userValue}>
      <div className={style.userValueContainer}>
        <p className={style.userValueDescription}>
          Write down how much water you will drink:
        </p>
        <input
          className={style.inputValue}
          type="text"
          name="inputValue"
          placeholder="0"
          value={userValue}
          onChange={e => {
            setUserValue(e.target.value);
          }}
        />
      </div>
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default DailyUserValue;
