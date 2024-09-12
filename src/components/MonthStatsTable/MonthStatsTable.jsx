import style from './MonthStatsTable.module.css';
import { formatDate } from './helper';
import { useState } from 'react';
import DayItem from './DayItem/DayItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyRecord } from '../../redux/water/operations';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

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

    const isFuture = Date.now() - 3600000 < date;
    return (
        <div className={style.container}>
            <div className={style.headerContainer}>
                <h2>Month</h2>
                <div className={style.dateContainer}>
                    <button onClick={handlePreviousDateClick}>
                        <SlArrowLeft className={style.icon} />
                    </button>
                    <p className={style.month}>{formatDate(date)}</p>
                    {!isFuture ? (
                        <button onClick={handleNextDateClick}>
                            <SlArrowRight className={style.icon} />
                        </button>
                    ) : (
                        <div className={style.icon}></div>
                    )}
                </div>
            </div>
            <div className={style.containerWithDays}>
                {items.map((item, i) => {
                    return (
                        <li className={style.dayItemContainer} key={i}>
                            <DayItem data={item} index={i} />
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default MonthStatsTable;
