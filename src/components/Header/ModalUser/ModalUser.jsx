import { useEffect, useRef } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import css from './ModalUser.module.css';
import clsx from 'clsx';

export default function ModalUser({
  contextModalIsOpen,
  closeContext,
  openModal,
  openLogOut,
}) {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeContext();
      }
    };
    const handleMouseDown = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeContext();
      }
    };
    if (contextModalIsOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [contextModalIsOpen, closeContext]);
  function handleSettingClick() {
    openModal();
    closeContext();
  }
  function handleLogOutClick() {
    openLogOut();
    closeContext();
  }
  return (
    <div
      className={clsx(css['context-container'], {
        [css['is-hidden']]: !contextModalIsOpen,
      })}
      ref={modalRef}
    >
      <div className={css.context}>
        <button
          className={css['context-button']}
          onClick={handleSettingClick}
          type="button"
        >
          <IoSettingsOutline />
          Setting
        </button>
        <button
          className={css['context-button']}
          type="button"
          onClick={handleLogOutClick}
        >
          <TbLogout />
          Log out
        </button>
      </div>
    </div>
  );
}
