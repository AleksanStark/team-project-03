import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats.jsx";
import style from "./DayItem.module.css";
import { Popover } from "antd";

const DayItem = ({ data, index, onClick }) => {
  const percent = data.consumptionPercentage;

  return (
    <Popover
      overlayClassName={style.popover}
      placement="top"
      content={<DaysGeneralStats dayData={data} />}
    >
      <div className={style.container}>
        <div
          className={style.containerForDay}
          style={{ border: percent < 100 ? "1px solid #FF9D43" : "none" }}
        >
          <button className={style.numberOfDay}>{index + 1}</button>
        </div>
        <div>
          <p className={style.percentOfDay}>{percent.split(".")[0]} %</p>
        </div>
      </div>
    </Popover>
  );
};

export default DayItem;
