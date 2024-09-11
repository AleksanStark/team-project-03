import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from '../../components/TodayListModal/TodayListModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { PiMinusLight } from 'react-icons/pi';
import { FiPlus } from 'react-icons/fi';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const TodayListModal = ({ isOpen, onClose, currentRecord, onSave }) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [value, setValue] = useState(currentRecord ? currentRecord.volume : 0);
  const [time, setTime] = useState(
    currentRecord ? currentRecord.time : getCurrentTime(),
  );
  const [inputAmount, setInputAmount] = useState(value);

  useEffect(() => {
    if (currentRecord) {
      setValue(currentRecord.volume);
      setTime(currentRecord.time);
    }
  }, [currentRecord]);

  const handleSave = () => {
    const updatedRecord = {
      id: currentRecord ? currentRecord.id : Date.now(), // Якщо currentRecord немає, використовуємо унікальний ID
      value,
      time,
    };

    onSave(updatedRecord);
    onClose();
  };
  const handlerBlur = () => {
    setValue(inputAmount);
  };
  const handleStepChange = (delta) => {
    setValue((prev) => Math.max(0, prev + delta));
  };

  if (!isOpen) return null;

  return (
    <div
      className={css.modal_backdrop}
      tabIndex={0}
      onKeyUp={(event) => {
        if (event.key === 'Escape') onClose();
      }}
    >
      <div className={css.modal_container}>
        <button className={css.modal_close_button} onClick={onClose}>
          <IoCloseOutline className={css.modal_close_icon} />
        </button>
        <h3 className={css.title}>
          {currentRecord ? 'Edit water record' : 'Add water'}
        </h3>
        <div>
          <p className={css.value_header}>Choose a value:</p>
          <p className={css.amount_water_text}>Amount of water:</p>
          <div className={css.amount_selector}>
            <button className={css.btn} onClick={() => handleStepChange(-50)}>
              <PiMinusLight className={css.btn_icon} />
            </button>
            <span className={css.amount_display}>{value} ml</span>
            <button className={css.btn} onClick={() => handleStepChange(50)}>
              <FiPlus className={css.btn_icon} />
            </button>
          </div>
        </div>

        <p className={css.record_time_text}>Recording time:</p>
        <div>
          <Flatpickr
            value={time}
            onChange={([date]) => setTime(date.toTimeString().substring(0, 5))}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: 'H:i',
              time_24hr: true,
              minuteIncrement: 5,
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
            onChange={(e) => {
              const value = e.target.value;
              setInputAmount(value === '' ? '' : Number(value));
            }}
            onBlur={handlerBlur}
            className={css.custom_amount_input}
          />
        </div>
        <div className={css.modal_footer}>
          <span className={css.footer_amount}>{value} ml</span>
          <button className={css.save_button} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

TodayListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentRecord: PropTypes.shape({
    volume: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
};

export default TodayListModal;
