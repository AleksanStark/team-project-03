import style from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ dayData }) => {
  return (
    <div className={style.container}>
      <h3 className={style.date}>{dayData && dayData.date}</h3>
      <p className={style.dailyNorma}>
        Daily norma:
        <span className={style.dailySpan}>
          {dayData && dayData.dailyNormaLiters.split(".")[0]} L
        </span>
      </p>
      <p className={style.fulfillment}>
        Fulfillment of the daily norm:
        <span className={style.dailySpan}>
          {dayData && dayData.consumptionPercentage.split(".")[0]} %
        </span>
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
