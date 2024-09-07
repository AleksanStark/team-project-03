import css from './DaysGeneralStats.module.css';

export default function DaysGeneralStats({
  date,
  totalWater,
  progres,
  dailyRecords,
}) {
  // date дата за яку вибрав юзер
  // totalWater норма випитої води за цей день
  //  progres співідношення випитої води до норми
  // dailyRecords кількість прийомів води

  // експерименти з форматом дати, можуть бути видалені
  //   const totalWater = 1.2;
  //   const progres = 60;
  //   const dailyRecords = 6;
  //   const options = {
  //     day: 'numeric',
  //     month: 'short',
  //   };
  //   const date1 = new Date().toLocaleString('en-US', options);
  //   const date2 = new Date().toLocaleString('en-US', options);
  //   const date3 = new Date().toLocaleString('en-US');
  //   console.log(date1 === date2);
  //   console.log(date3);

  return (
    <>
      <div className={css.container}>
        <ul className={css.list}>
          <li>
            <p className={css.titel_data}>{date}</p>
          </li>
          <li className={css.link_page}>
            <p className={css.page}>Daily norma:</p>
            <p className={css.info_water}>{totalWater} L</p>
          </li>
          <li className={css.link_page}>
            <p className={css.page}>Fulfillment of the daily norm:</p>
            <p className={css.info_water}>{progres}%</p>
          </li>
          <li className={css.link_page_records}>
            <p className={css.page}>How many servings of water:</p>
            <p className={css.info_water}>{dailyRecords}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
