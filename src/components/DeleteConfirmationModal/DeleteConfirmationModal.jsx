import { IoCloseOutline } from 'react-icons/io5';
import css from '../../components/DeleteConfirmationModal/DeleteConfirmationModal.module.css';

export const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className={css.modal_backdrop}
      tabIndex={0}
      onKeyUp={(event) => {
        if (event.key === 'Escape') onClose();
      }}
    >
      <div className={css.modal_container}>
        <div className={css.titleWrapper}>
          <h2 className={css.modal_title}>Delete entry</h2>
          <button className={css.modal_close_button} onClick={onClose}>
            <IoCloseOutline className={css.modal_close_icon} />
          </button>
          <h3 className={css.sureWrapper}>
            Are you sure you want to delete this record?
          </h3>
        </div>
        <div className={css.modal_footer}>
          <button className={css.deleteBtn} onClick={onConfirm}>
            Delete
          </button>
          <button className={css.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
