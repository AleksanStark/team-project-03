import style from './MonthStatsTable.module.css';
import icons from '../../images/icons.svg';
import { formatDate } from './helper';
import { useState } from 'react';
import DayItem from './DayItem/DayItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyRecord } from '../../redux/water/operations';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.water.monthlyRecords);
  const [date, setDate] = useState(new Date());

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

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2>Month</h2>
        <div>
          <button onClick={handlePreviousDateClick}>
            <svg className={style.icons} width="6" height="10">
              <use href={`${icons}#icon-left-check-mark`}></use>
            </svg>
          </button>
          <p className={style.month}>{formatDate(date)}</p>
          <button onClick={handleNextDateClick}>
            <svg className={style.icons} width="6" height="10">
              <use href={`${icons}#icon-right-check-mark`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={style.containerWithDays}>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <DayItem data={item} index={i} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MonthStatsTable;
