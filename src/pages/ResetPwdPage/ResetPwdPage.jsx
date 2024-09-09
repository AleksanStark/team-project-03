import React from "react";
import { useSelector } from "react-redux";
import ResetPwdForm from "../../components/ResetPwdForm/ResetPwdForm.jsx";
import { selectIsLoading } from "../../redux/auth/auth.selectors.js";
import Loader from "../../components/Loader/Loader.jsx";
import style from "./ResetPwdPage.module.css";

const ResetPwdPage = () => {
  const isLoader = useSelector(selectIsLoading);

  return (
    <div className={style.container}>
      <div className={style.background}>
        {isLoader ? (
          <Loader />
        ) : (
          <>
            <ResetPwdForm />
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPwdPage;
