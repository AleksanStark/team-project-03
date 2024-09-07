import style from './DayItem.module.css';
// import {useState} from 'react'

const DayItem = ({ data, index }) => {
  const percent = data.consumptionPercentage;
  return (
    <div className={style.container}>
      <div className={style.containerForDay}>
        <p className={style.numberOfDay}>{index + 1}</p>
      </div>
      <div>
        <p className={style.percentOfDay}>{percent} %</p>
      </div>
    </div>
  );
};

export default DayItem;
