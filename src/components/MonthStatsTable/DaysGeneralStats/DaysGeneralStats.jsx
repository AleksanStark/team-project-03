import { useSelector } from "react-redux";
import style from "./DaysGeneralStats.module.css";
import { dailyNormaSelector } from "../../../redux/auth/auth.selectors.js";

const DaysGeneralStats = ({ dayData }) => {
  const norma = useSelector(dailyNormaSelector);
  const percent = (dayData.consumptionPercentage / 1000).toFixed(0);
  console.log(norma);
  return (
    <div className={style.container}>
      <h3 className={style.date}>{dayData && dayData.date}</h3>
      <p className={style.dailyNorma}>
        Daily norma:
        <span className={style.dailySpan}>{dayData && norma} L</span>
      </p>
      <p className={style.fulfillment}>
        Fulfillment of the daily norm:
        <span className={style.dailySpan}>{dayData && percent} %</span>
      </p>
      <p className={style.amount}>
        How many servings of water:
        <span className={style.dailySpan}>
          {dayData && dayData.recordsCount}
        </span>
      </p>
    </div>
  );
};

export default DaysGeneralStats;
