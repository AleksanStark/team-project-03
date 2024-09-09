import style from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ dayData }) => {
  console.log(dayData);
  return (
    <>
      <h3 className={style.date}>{dayData && dayData.date}</h3>
      <p>
        Daily norma:{" "}
        <span>{dayData && dayData.dailyNormaLiters.split(".")[0]} L</span>
      </p>
      <p>
        Fulfillment of the daily norm:{" "}
        <span>{dayData && dayData.consumptionPercentage.split(".")[0]} %</span>
      </p>
      <p>
        How many servings of water:{" "}
        <span>{dayData && dayData.recordsCount}</span>
      </p>
    </>
  );
};

export default DaysGeneralStats;
