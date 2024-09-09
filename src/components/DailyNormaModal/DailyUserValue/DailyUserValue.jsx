import { useEffect, useState } from "react";
import style from "./DailyUserValue.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../../redux/water/slice.js";
import { updateDailyNorma } from "../../../redux/auth/operations.js";
import { toast } from "react-toastify";

const DailyUserValue = ({ closeModal }) => {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState("");

  const handleClick = () => {
    const normalizedValue = +userValue;
    if (isNaN(normalizedValue) || normalizedValue <= 0) {
      toast.error("Invalid value. Enter a number greater than 0.");
      console.log("Invalid value. Enter a number greater than 0.");
      return;
    }
    setIsFirstOpen(false);
    dispatch(updateDailyNorma(normalizedValue));
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
          onChange={(e) => {
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
