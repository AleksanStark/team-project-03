import Modal from "react-modal";
import style from "./DaysGeneralStats.module.css";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0b0b0bd2",
  },
};

const DaysGeneralStats = ({ modalIsOpen, closeModal, dayData }) => {
  return (
    <div className={style.modal}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h3 className={style.date}>{dayData && dayData.date}</h3>
        <p>
          Daily norma: <span>{dayData && dayData.dailyNorm}</span>
        </p>
        <p>
          Fulfillment of the daily norm:{" "}
          <span>{dayData && dayData.consumptionPercentage} %</span>
        </p>
        <p>
          How many servings of water: <span>{dayData && dayData.servings}</span>
        </p>
      </Modal>
    </div>
  );
};

export default DaysGeneralStats;
