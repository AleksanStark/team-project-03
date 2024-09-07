import { useState } from 'react';
import css from './TodayAddWaterModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { FiPlus } from 'react-icons/fi';
import { PiMinusLight } from 'react-icons/pi';
// import { useDispatch } from 'react-redux';
// import { addWaterRecord } from '../../redux/water/operations.js';
// import addWaterRecord from 'redux/water/operations';
// import { addWaterRecord } from 'redux/water/operations.js';

const TodayAddWaterModal = ({ onClose }) => {
  const [amount, setAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState(amount);
  const [time, setTime] = useState(() => {
    const now = new Date();
    now.setSeconds(0, 0);
    return now;
  });
  // const dispatch = useDispatch();

  const handleTimeChange = selectedDates => {
    setTime(selectedDates[0]);
  };

  const handleAdd = () => setAmount(amount + 50);
  const handleMinus = () => setAmount(Math.max(amount - 50, 0));
  const handlerBlur = () => {
    setAmount(inputAmount);
  };
  // const handleSave = () => {
  //   const record = { amount, time: time.toISOString() };
  //   dispatch(addWaterRecord(record));
  // };

  return (
    <div
      className={css.modal_backdrop}
      tabIndex={0}
      onKeyUp={event => {
        if (event.key === 'Escape') onClose();
      }}
    >
      <div className={css.modal_container}>
        <button className={css.modal_close_button} onClick={onClose}>
          <IoCloseOutline className={css.modal_close_icon} />
        </button>
        <h3 className={css.title}>Add water</h3>
        <div>
          <p className={css.value_header}>Choose a value:</p>
          <p className={css.amount_water_text}>Amount of water:</p>
          <div className={css.amount_selector}>
            <button className={css.btn} onClick={handleMinus}>
              <PiMinusLight className={css.btn_icon} />
            </button>
            <span className={css.amount_display}>{amount}ml</span>
            <button className={css.btn} onClick={handleAdd}>
              <FiPlus className={css.btn_icon} />
            </button>
          </div>
        </div>

        <p className={css.record_time_text}>Recording time:</p>
        <div>
          <Flatpickr
            value={time}
            onChange={handleTimeChange}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: 'H:i',
              time_24hr: true,
              minuteIncrement: 5,
              defaultHour: new Date().getHours(),
              defaultMinute: new Date().getMinutes(),
            }}
            className={css.time_input}
          />
        </div>

        <div>
          <p className={css.enter_value_text}>
            Enter the value of the water used:
          </p>
          <input
            type="number"
            value={inputAmount === 0 ? '' : inputAmount}
            onChange={e => {
              const value = e.target.value;
              setInputAmount(value === '' ? '' : Number(value));
            }}
            onBlur={handlerBlur}
            className={css.custom_amount_input}
          />
        </div>

        <div className={css.modal_footer}>
          <span className={css.footer_amount}>{amount} ml</span>
          <button className={css.save_button}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TodayAddWaterModal;
// onClick={handleSave}
