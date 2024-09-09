import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats.jsx";
import { useModal } from "../helper.js";
import PopupItem from "../PopupItem/PopupItem.jsx";
import style from "./DayItem.module.css";

const DayItem = ({ data, index, onClick }) => {
  const [modalState, openModal, closeModal] = useModal();

  const percent = data.consumptionPercentage;

  return (
    <div
      className={style.container}
      onMouseEnter={openModal}
      onMouseLeave={closeModal}
    >
      <div
        className={style.containerForDay}
        style={{ border: percent < 100 ? "1px solid #FF9D43" : "none" }}
      >
        <button className={style.numberOfDay}>{index + 1}</button>
      </div>
      <div>
        <p className={style.percentOfDay}>{percent.split(".")[0]} %</p>
      </div>
      {modalState && (
        <PopupItem closeModal={closeModal} index={index}>
          <DaysGeneralStats dayData={data} />
        </PopupItem>
      )}
    </div>
  );
};

export default DayItem;
