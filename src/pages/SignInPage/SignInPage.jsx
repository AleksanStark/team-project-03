import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm.jsx';
import { selectIsLoading } from '..//../redux/auth/auth.selectors';
import Loader from 'components/Loader/Loader.jsx';
import style from './SignInPage.module.css';

const SignInPage = () => {
  const isLoader = useSelector(selectIsLoading);

  return (
    <div className={style.container}>
      <div className={style.background}>
        {isLoader ? (
          <Loader />
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
