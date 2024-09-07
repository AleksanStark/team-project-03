import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import css from './AuthNav.module.css';
import Logo from '../../../images/logo.png';
import { routes } from 'routes/routes';

import LogOut from '../LogOut/Logout';
import ModalSetting from '../ModalSetting/ModalSetting';
import ModalUser from '../ModalUser/ModalUser';
import { selectIsLoggedIn } from '../../../redux/auth/auth.selectors';
import { selectUser } from '../../../redux/auth/auth.selectors';

export default function AuthNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = true;
  const user = useSelector(selectUser);
  console.log(user);

  const userTest = { name: null, email: 'max@BiLogoGmail.com', photo: null };
  const { name, email, photo } = userTest;

  //=========modalOpenSetting===================
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  //=========ContextModal=======================
  const [contextModalIsOpen, setIsContextModalOpen] = useState(false);
  function openContext() {
    setIsContextModalOpen(true);
  }
  function closeContext() {
    setIsContextModalOpen(false);
  }
  //=========LogOutModal========================
  const [logOutModalIsOpen, setLogOutModalIsOpen] = useState(false);
  function openLogOut() {
    setLogOutModalIsOpen(true);
  }
  function closeLogOut() {
    setLogOutModalIsOpen(false);
  }
  const handleClick = () => {
    openContext();
  };

  const imageDefault = () => {
    if (photo) {
      return photo;
    } else if (name) {
      return name.slice(0, 1).toUpperCase();
    }
    return email.slice(0, 1).toUpperCase();
  };
  //==================================
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate(routes.LOGIN);
  };
  return (
    <div className={css.wrap}>
      {isLoggedIn ? (
        <NavLink to={routes.HOMEPAGE}>
          {/* Home Page */}
          <img src={Logo} width="102" height="48" alt="Logo" />
        </NavLink>
      ) : (
        <NavLink to={routes.WELCOMEPAGE}>
          {/* Welcom Page */}
          <img src={Logo} width="102" height="48" alt="Logo" />
        </NavLink>
      )}
      {isLoggedIn ? (
        <div className={css['user-container']}>
          <p className={css['name-text']}>{name}</p>
          {!photo ? (
            <p className={css['first-letter']}>{imageDefault()}</p>
          ) : (
            <img
              src={imageDefault()}
              className={css.image}
              width="28"
              height="28"
              alt="user"
            />
          )}
          <button type="button" className={css.button} onClick={handleClick}>
            <IoIosArrowDown />
          </button>
        </div>
      ) : (
        <div className={css['user-container']}>
          <button
            type="button"
            className={css['button-sin']}
            onClick={handleSignInClick}
          >
            Sign in
            <HiOutlineUserCircle className={css.icon} />
          </button>
        </div>
      )}
      <ModalUser
        openLogOut={openLogOut}
        openModal={openModal}
        closeContext={closeContext}
        contextModalIsOpen={contextModalIsOpen}
      />
      <LogOut logOutModalIsOpen={logOutModalIsOpen} closeLogOut={closeLogOut} />
      <ModalSetting closeModal={closeModal} isOpen={modalIsOpen} />
    </div>
  );
}
// andrii@gmail.com
// 1111111111
