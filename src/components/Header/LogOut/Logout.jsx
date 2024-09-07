import { useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import css from './LogOut.module.css';
import clsx from 'clsx';
import { logOut } from '../../../redux/auth/operations.js';
import { useDispatch } from 'react-redux';

export default function LogOut({ logOutModalIsOpen, closeLogOut }) {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeLogOut();
      }
    };
    const handleMouseDown = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLogOut();
      }
    };
    if (logOutModalIsOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [logOutModalIsOpen, closeLogOut]);
  //==============================submit=============
  const handleClick = () => {
    dispatch(logOut());
    closeLogOut();
  };
  return (
    <div
      className={clsx(css.backdrop, { [css['is-hidden']]: !logOutModalIsOpen })}
    >
      <div className={css.modal} ref={modalRef}>
        <div className={css['title-block']}>
          <p className={css['log-title']}>Log out</p>
          <button
            type="button"
            className={css['button-close']}
            onClick={closeLogOut}
          >
            <IoMdClose />
          </button>
        </div>
        <p className={css['title']}>Do you really want to leave?</p>
        <div className={css['button-block']}>
          <button
            type="button"
            className={css['button-out']}
            onClick={handleClick}
          >
            Log out
          </button>
          <button
            type="button"
            className={css['button-cancel']}
            onClick={closeLogOut}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
