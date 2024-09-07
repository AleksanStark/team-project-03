import { useState } from 'react';
import css from './WaterRatioPanel.module.css';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { LuPlusCircle } from 'react-icons/lu';
import TodayAddWaterModal from 'components/TodayAddWaterModal/TodayAddWaterModal';

export default function WaterRatioPanel() {
  const progres = 20;
  //   const progres = useSelector(); // отримати співідношення випитої води до заданої норми
  //   не знаю чи буде приходити з бекенда вже співідношення і я так думаю що краще брати значення з бекенду ( за датою і зробити перевірку дати, щоб значення скідалося коли наступний день ). якщо з беку буде приходити лише масив значень то прийдеться зробити перерахунок значення

  //   const dispatch = useDispatch();

  //   const openAddWaterModal = () => {
  //     dispatch(ToDayAddWaterModal(true)); // відкриття модального вікна для додавання випитої води
  //   };

  // стилі які будуть примінятися при дозягнені певногопрогресу

  const [isOpenModal, setIsOpenModal] = useState(false);

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
