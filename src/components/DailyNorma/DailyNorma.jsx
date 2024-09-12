import { useState } from "react";
import css from "./DailyNorma.module.css";
import DailyNormaModal from "components/DailyNormaModal/DailyNormaModal";
import { useSelector } from "react-redux";

import { dailyNormaSelector } from "../../redux/auth/auth.selectors";
const DailyNorma = () => {
  const dailyNorma = useSelector(dailyNormaSelector);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={css.container}>
      <div className={css.headerContainer}>
        <h2 className={css.headerText}>My daily norma</h2>
      </div>
      <div className={css.funcContainer}>
        <h2 className={css.waterInfo}>{dailyNorma} L</h2>
        <button type="button" className={css.editButton} onClick={openModal}>
          Edit
        </button>
      </div>
      <DailyNormaModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
export default DailyNorma;
