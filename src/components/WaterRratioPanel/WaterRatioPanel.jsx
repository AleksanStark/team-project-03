import { useState } from "react";
import css from "./WaterRatioPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LuPlusCircle } from "react-icons/lu";
import TodayAddWaterModal from "components/TodayAddWaterModal/TodayAddWaterModal";
import { getDailyRecord } from "../../redux/water/operations";
import { selectProgres } from "../../redux/water/selector";

export default function WaterRatioPanel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyRecord());
  }, [dispatch]);

  //   const openAddWaterModal = () => {
  //     dispatch(ToDayAddWaterModal(true)); // відкриття модального вікна для додавання випитої води
  //   };
  const [isOpenModal, setIsOpenModal] = useState(false);

  const progres = useSelector(selectProgres);

  // стилі які будуть примінятися при дозягнені певногопрогресу
  const styleZero = {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.25,
  };
  // стилі до 50%
  function styleFirst() {
    if (progres < 50) {
      return styleZero;
    } else {
      return {};
    }
  }
  // стилі досягнувши 50% або більше 50%
  function styleSecond() {
    if (progres === 50 || (progres > 50 && progres < 100)) {
      return styleZero;
    } else {
      return {};
    }
  }
  // стилі по досягненю 100% і більше
  function styleDone() {
    if (progres === 100 || progres > 100) {
      return styleZero;
    } else return {};
  }
  // провірка прогреса щоб прогрес бар не вилітав за межі, задіяв огранічения в 100
  function cheakRatio() {
    if (progres < 100) {
      return progres;
    } else if (progres > 100 || progres === 100) {
      return 100;
    }
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <div>
      <div className={css.conteinerItems}>
        <div className={css.conteiner}>
          <h2 className={css.title}>Today</h2>
          <div className={css.conteinerInfo}>
            <div className={css.containerRatio}>
              <div className={css.ratio}>
                <div
                  className={css.rectangle}
                  style={{ width: `${cheakRatio()}%` }}
                >
                  <div className={css.icon}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.info}>
            <p className={css.line} style={styleFirst()}>
              0%
            </p>
            <p className={css.line} style={styleSecond()}>
              50%
            </p>
            <p className={css.line} style={styleDone()}>
              100%
            </p>
          </div>
        </div>
        <button className={css.btn} onClick={handleOpenModal}>
          <LuPlusCircle style={{ height: 18, width: 18, marginRight: 13 }} />
          Add Water
        </button>
      </div>
      {isOpenModal ? (
        <TodayAddWaterModal onClose={handleCloseModal} />
      ) : undefined}
    </div>
  );
}
