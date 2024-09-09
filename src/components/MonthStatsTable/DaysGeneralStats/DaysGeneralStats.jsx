import Modal from "react-modal";
import style from "./DaysGeneralStats.module.css";
import { useCallback, useEffect } from "react";
Modal.setAppElement("#root");

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const DaysGeneralStats = ({
  modalIsOpen,
  closeModal,
  dayData,
  coordinate = {},
}) => {
  const onEscape = useCallback((e) => {
    console.log(e.code);
    if (e.code === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      console.log("addListener");
      window.addEventListener("keydown", onEscape);
    }
    return () => {
      console.log("removeListener");
      window.removeEventListener("keydown", onEscape);
    };
  }, [modalIsOpen, onEscape, closeModal]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const x = coordinate.left - 292 / 2;

  const customStyle = {
    left: `${x > 0 ? x : 0}px`,
    top: `${coordinate.top - 50}px`,
  };
  return (
    modalIsOpen && (
      <div className={style.backdrop} onClick={handleBackdrop}>
        <div isOpen={modalIsOpen} className={style.modal} style={customStyle}>
          <h3 className={style.date}>{dayData && dayData.date}</h3>
          <p>
            Daily norma: <span>{dayData && dayData.dailyNorm}</span>
          </p>
          <p>
            Fulfillment of the daily norm:{" "}
            <span>{dayData && dayData.consumptionPercentage} %</span>
          </p>
          <p>
            How many servings of water:{" "}
            <span>{dayData && dayData.servings}</span>
          </p>
        </div>
      </div>
    )
  );
};

export default DaysGeneralStats;
