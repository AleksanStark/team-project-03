import DailyNorma from "components/DailyNorma/DailyNorma";
import css from "./HomePage.module.css";
import HomeBottleImg from "components/HomeBottleImg/HomeBottleImg";
import MonthStatsTable from "components/MonthStatsTable/MonthStatsTable";
import WaterRatioPanel from "components/WaterRratioPanel/WaterRatioPanel";
import TodayWaterList from "components/TodayWaterList/TodayWaterList";

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      {/* <Popover content={<p>"Hello"</p>} title="Title">
        Hello
      </Popover> */}
      <div className={css.dailyContainer}>
        <DailyNorma />
      </div>
      <div className={css.addWater}>
        <HomeBottleImg />
        <WaterRatioPanel />
      </div>
      <div>
        <TodayWaterList />
        <MonthStatsTable />
      </div>
    </section>
  );
};

export default HomePage;
