import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import css from "./Footer.module.css";
import TeamMembers from "./TeamMembers";
import "./style.css";

const Footer = () => {
  const [isOpen, setTeamModalOpen] = useState(false);

  const openModal = () => {
    setTeamModalOpen(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setTeamModalOpen(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css["footer-text"]}>
          <span className={css.showOnSmallScreen}></span> 2024 Developed with love 💛💙
        </p>
        <div className={css.vr}></div>
        <button type="button" className={css["footer-btn"]} onClick={openModal}>
          by GOIT.ALUMNI
        </button>
      </div>
      {isOpen && (
        <Modal title={("Our Team")} onClose={closeModal}>
          <TeamMembers />
        </Modal>
      )}
    </footer>
  );
};

export default Footer;