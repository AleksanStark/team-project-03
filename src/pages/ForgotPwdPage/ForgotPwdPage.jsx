import React from "react";
import { useSelector } from "react-redux";
import ForgotPwdForm from "../../components/ForgotPwdForm/ForgotPwdForm.jsx";
import { selectIsLoading } from "../../redux/auth/auth.selectors.js";
import Loader from "../../components/Loader/Loader.jsx";
import style from "./ForgotPwdPage.module.css";

const ForgotPwdPage = () => {
  const isLoader = useSelector(selectIsLoading);

  return (
    <div className={style.container}>
      <div className={style.background}>
        {isLoader ? (
          <Loader />
        ) : (
          <>
            <ForgotPwdForm />
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPwdPage;
