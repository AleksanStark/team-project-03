import css from "./ModalConfirm.module.css";
import Modal from "./Modal";

const ModalConfirm = ({
  title,
  text,
  onOk,
  onClose,
  buttonTextOk,
  buttonTextCancel,
}) => {
  return (
    <Modal title={title} onClose={onClose} confirm>
      <div className={css.container}>
        <h4 className={css.title}>{text}</h4>
        <div className={css.buttons}>
          <button className={css.logoutBtn} type="button" onClick={onOk}>
            {buttonTextOk}
          </button>
          <button
            className={css.cancelBtn}
            type="button"
            onClick={() => onClose(true)}
          >
            {buttonTextCancel}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
