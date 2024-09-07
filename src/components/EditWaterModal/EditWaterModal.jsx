import { useEffect, useState } from 'react';
import css from './EditWaterModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { FiPlus } from 'react-icons/fi';
import { PiMinusLight } from 'react-icons/pi';
import { PiPintGlassThin } from 'react-icons/pi';
// import { useSelector } from 'react-redux';
// import { updateWaterRecord } from 'redux/water/operations';
// import {
//   selectCurrentRecord,
//   selectError,
//   selectIsLoading,
// } from 'redux/water/slice';
// import { getWaterRecord } from 'redux/water/operations';
// import { useDispatch } from 'react-redux';
// import { addWaterRecord } from '../../redux/water/operations.js';
// import addWaterRecord from 'redux/water/operations';
// import { addWaterRecord } from 'redux/water/operations.js';

//З компоненту який рендерить список випитої води за день
// прийняти з компоненту пропси onClose(закриття модалки)
// recordId(прийняти з батьківського елемента(в якому вказати:
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRecordId, setSelectedRecordId] = useState(null);

// const handleOpenModal = (recordId) => {
//     setSelectedRecordId(recordId);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedRecordId(null);
//   };
// <button onClick={() => handleOpenModal()}>Edit Water Record</button>
//       {isModalOpen && (
//         <EditWaterModal
//           recordId={selectedRecordId}
//           onClose={handleCloseModal}
//         />
//       )}

const EditWaterModal = ({ recordId, onClose }) => {
  const [amount, setAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState(amount);
  const [time, setTime] = useState(() => {
    const now = new Date();
    now.setSeconds(0, 0);
    return now;
  });
  // const dispatch = useDispatch();
  // const currentRecord = useSelector(selectCurrentRecord);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   if (recordId) {
  //     dispatch(getWaterRecord(recordId));
  //   }
  // }, [recordId, dispatch]);

  // useEffect(() => {
  //   if (currentRecord) {
  //     setAmount(currentRecord.amount);
  //     setInputAmount(currentRecord.amount);
  //     setTime(now(currentRecord.time));
  //   }
  // }, [currentRecord]);

  const handleTimeChange = selectedDates => {
    setTime(selectedDates[0]);
  };

  const handleAdd = () => setAmount(amount + 50);
  const handleMinus = () => setAmount(Math.max(amount - 50, 0));
  const handlerBlur = () => {
    setAmount(inputAmount);
  };
  // const handleSave = () => {
  //    const updatedRecord = { amount, time: time.toISOString() };
  //    dispatch(updateWaterRecord(recordId, updatedRecord));
  //    onClose();
  // };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  // підставити замість 0 currentRecord.amount в  <p className={css.record_amount}>{amount} ml</p>
  //   сurrentRecord.time в  <p className={css.record_time}>

  return (
    <div className={css.modal_backdrop}>
      <div className={css.modal_container}>
        <button className={css.modal_close_button}>
          <IoCloseOutline className={css.modal_close_icon} />
        </button>
        <h3 className={css.title}>Edit the entered amount of water</h3>

        <div className={css.record_details}>
          <PiPintGlassThin className={css.glass} />
          <p className={css.record_amount}>{amount} ml</p>
          <p className={css.record_time}>
            {new Date(0).toLocaleTimeString()} AM
          </p>
        </div>
        <div>
          <p className={css.value_header}>Correct entered data:</p>
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

export default EditWaterModal;
// додати onClick={handleSave} на <button className={css.save_button}>Save</button>
