import style from "./MonthStatsTable.module.css";
import { formatDate } from "./helper";
import { useState } from "react";
import DayItem from "./DayItem/DayItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyRecord } from "../../redux/water/operations";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import DaysGeneralStats from "components/DaysGeneralStats/DaysGeneralStats";

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.water.monthlyRecords);
  const [date, setDate] = useState(new Date());

  const [modalIsOpen, setModalIsOpen] = useState(false); //!!!!
  const [selectedDay, setSelectedDay] = useState(null); //!!!!

  useEffect(() => {
    dispatch(getMonthlyRecord(date));
  }, [date, dispatch]);

  const handlePreviousDateClick = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };
  const handleNextDateClick = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const openModal = (dayData) => {
    setSelectedDay(dayData);
    setModalIsOpen(true);
  }; // !!!

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDay(null);
  }; // !!!

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2>Month</h2>
        <div className={style.dateContainer}>
          <button onClick={handlePreviousDateClick}>
            <SlArrowLeft className={style.icon} />
          </button>
          <p className={style.month}>{formatDate(date)}</p>
          <button onClick={handleNextDateClick}>
            <SlArrowRight className={style.icon} />
          </button>
        </div>
      </div>
      <div className={style.containerWithDays}>
        {items.map((item, i) => {
          return (
            <li className={style.dayItemContainer} key={i}>
              <DayItem data={item} index={i} onClick={() => openModal(item)} />
            </li>
          );
        })}
      </div>
      <DaysGeneralStats
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        dayData={selectedDay}
      />
    </div>
  );
};

export default MonthStatsTable;
