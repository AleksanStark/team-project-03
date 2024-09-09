import { useEffect, useRef } from "react";
import css from "./Modal.module.css";
import closeIcon from "../images/x-mark.svg";
import { createPortal } from "react-dom";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";

const modalRoot = document.querySelector("#root-modal");

const Modal = ({ title, children, onClose, confirm = false }) => {

  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose(false);
      }
    };

    const handleClose = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    document.body.classList.add("body-scroll-lock");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClose); // Fixed to remove listener
      document.body.classList.remove("body-scroll-lock");
    };
  }, [onClose]);

  return modalRoot ? (
    createPortal(
      <AnimatedComponent css={css.backdrop}>
        <div className={css.container}>
          <div
            ref={modalRef}
            className={confirm ? `${css.modal} ${css.p24}` : css.modal}
            onClick={(event) => event.stopPropagation()}
          >
            {title && <h3 className={css.title}>{title}</h3>}
            <button className={css.btnClose} onClick={() => onClose(false)}>
              <img src={closeIcon} width={24} alt="Close" />
            </button>
            <div className={css.content}>{children}</div>
          </div>
        </div>
      </AnimatedComponent>,
      modalRoot
    )
  ) : (
    <AnimatedComponent css={css.backdrop}>
      <div className={css.container}>
        <div
          ref={modalRef}
          className={`${css.modal} ${
            title === ("userLogoModal.setting") ? css.settingModal : css.modal
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          {title && <h3 className={css.title}>{title}</h3>}
          <button className={css.btnClose} onClick={() => onClose(false)}>
            <img src={closeIcon} width={24} alt="Close" />
          </button>
          <div className={css.content}>{children}</div>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default Modal;
