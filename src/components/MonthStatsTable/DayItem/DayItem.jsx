import { useRef, useState } from "react";
import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats.jsx";
import style from "./DayItem.module.css";

const DayItem = ({ data, index, onClick }) => {
  const containerRef = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    console.log("close,", modalIsOpen);
  };

  const percent = data.consumptionPercentage;
  // console.log(containerRef?.current?.getBoundingClientRect());
  const coordinate = containerRef?.current?.getBoundingClientRect();

  return (
    <div className={style.container} ref={containerRef}>
      <div
        onClick={openModal}
        className={style.containerForDay}
        style={{ border: percent < 100 ? "1px solid #FF9D43" : "none" }}
      >
        <button className={style.numberOfDay}>{index + 1}</button>
      </div>
      <div onClick={openModal}>
        <p className={style.percentOfDay}>{percent.split(".")[0]} %</p>
      </div>
      <DaysGeneralStats
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        dayData={data}
        coordinate={coordinate}
      />
    </div>
  );
};

export default DayItem;
