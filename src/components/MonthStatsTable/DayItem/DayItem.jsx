// // import DaysGeneralStats from "components/DaysGeneralStats/DaysGeneralStats";
// import style from "./DayItem.module.css";
// // import { useState } from "react";

// // import {useState} from 'react'

// const DayItem = ({ data, index }) => {
//   // const [modalState, setModalState] = useState(false);

//   // const openModal = () => {};
//   // const closeModal = () => {};

//   // const handleClick = () => {
//   //   openModal();
//   //   // onAfterOpen();
//   // };

//   const percent = data.consumptionPercentage;

//   return (
//     <div className={style.container}>
//       <div
//         className={style.containerForDay}
//         style={{ border: percent < 100 ? "1px solid #FF9D43" : "none" }}
//       >
//         <button className={style.numberOfDay}>{index + 1}</button>
//       </div>
//       <div>
//         <p className={style.percentOfDay}>{percent} %</p>
//       </div>
//       {/* <DaysGeneralStats openModal={openModal} /> */}
//     </div>
//   );
// };

// export default DayItem;

import style from "./DayItem.module.css";

const DayItem = ({ data, index, onClick }) => {
  const percent = data.consumptionPercentage;

  return (
    <div className={style.container} onClick={onClick}>
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
  );
};

export default DayItem;
