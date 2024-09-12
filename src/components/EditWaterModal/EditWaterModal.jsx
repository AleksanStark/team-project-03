import { useEffect, useState } from "react";
import css from "./EditWaterModal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { FiPlus } from "react-icons/fi";
import { PiMinusLight } from "react-icons/pi";
import { PiPintGlassThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import {
  updateWaterRecord,
  getDailyRecord,
  getWaterRecord,
} from "../../redux/water/operations.js";
import { selectCurrentRecord } from "../../redux/water/slice.js";
import { useDispatch } from "react-redux";

const EditWaterModal = ({ recordId, onClose }) => {
  const [volume, setVolume] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [date, setDate] = useState(() => {
    const now = new Date();
    now.setSeconds(0, 0);
    return now;
  });

  const dispatch = useDispatch();
  const currentRecord = useSelector(selectCurrentRecord);

  useEffect(() => {
    if (recordId) {
      dispatch(getWaterRecord(recordId));
    }
  }, [recordId, dispatch]);

  useEffect(() => {
    if (currentRecord) {
      setVolume(currentRecord.volume);
      setInputAmount(currentRecord.volume);

      if (currentRecord.date) {
        const validDate = new Date(currentRecord.date);
        if (!isNaN(validDate)) {
          setDate(validDate);
        } else {
          console.error("Invalid date:", currentRecord.date);
          setDate(new Date());
        }
      } else {
        console.error("Date is undefined or null");
        setDate(new Date());
      }
    }
  }, [currentRecord]);

  const handleTimeChange = (selectedDates) => {
    if (selectedDates.length > 0) {
      setDate(selectedDates[0]);
    }
  };

  const handleAdd = () => setVolume(volume + 50);
  const handleMinus = () => setVolume(Math.max(volume - 50, 0));
  const handleBlur = () => {
    setVolume(inputAmount || 0);
  };

  const handleSave = () => {
    try {
      const updatedRecord = { volume, date: date.toISOString() };
      dispatch(updateWaterRecord(recordId, updatedRecord));
      onClose();
      dispatch(getDailyRecord());
    } catch (error) {
      console.error("Error saving record:", error);
    }
  };

  return (
    <div className={css.modal_backdrop}>
      <div className={css.modal_container}>
        <button className={css.modal_close_button} onClick={onClose}>
          <IoCloseOutline className={css.modal_close_icon} />
        </button>
        <h3 className={css.title}>Edit the entered amount of water</h3>

        <div className={css.record_details}>
          <PiPintGlassThin className={css.glass} />
          <p className={css.record_amount}>
            {currentRecord ? currentRecord.volume : 0} ml
          </p>
          <p className={css.record_time}>
            {currentRecord && currentRecord.date
              ? !isNaN(new Date(currentRecord.date))
                ? new Date(currentRecord.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Invalid date"
              : ""}
          </p>
        </div>
        <div>
          <p className={css.value_header}>Correct entered data:</p>
          <p className={css.amount_water_text}>Amount of water:</p>
          <div className={css.amount_selector}>
            <button className={css.btn} onClick={handleMinus}>
              <PiMinusLight className={css.btn_icon} />
            </button>
            <span className={css.amount_display}>{volume}ml</span>
            <button className={css.btn} onClick={handleAdd}>
              <FiPlus className={css.btn_icon} />
            </button>
          </div>
        </div>

        <p className={css.record_time_text}>Recording time:</p>
        <div>
          <Flatpickr
            value={date}
            onChange={handleTimeChange}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
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
            value={
              inputAmount === undefined || inputAmount === null
                ? ""
                : inputAmount
            }
            onChange={(e) => {
              const value = e.target.value;
              setInputAmount(value === "" ? 0 : Number(value));
            }}
            onBlur={handleBlur}
            className={css.custom_amount_input}
          />
        </div>

        <div className={css.modal_footer}>
          <span className={css.footer_amount}>{volume} ml</span>
          <button className={css.save_button} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWaterModal;
