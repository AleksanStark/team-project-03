import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import style from "./ResetPwdForm.module.css";
import { resetPwd } from "redux/auth/operations.js";
import { routes } from "routes/routes";

const ResetPwdSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be 8 symbols minimum")
    .max(64, "Password must be 64 symbols maximum")
    .required("Password is required!"),
  newPassword: Yup.string()
    .min(8, "Password must be 8 symbols minimum")
    .max(64, "Password must be 64 symbols maximum")
    .required("Password is required!"),
});

export default function ResetPwdForm({ token }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(resetPwd({ password: values.password, token })).unwrap();
      toast.success("Password has been reset successfully.");
      actions.resetForm();
      navigate(routes.LOGIN);
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    }
    actions.setSubmitting(false);
  };

  return (
    <div className="{style.container}">
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{
          password: "",
          newPassword: "",
        }}
        validationSchema={ResetPwdSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className={style.form} autoComplete="off">
            <h2 className={style.title}>Update your password</h2>
            <label className={style.label} htmlFor="password">
              Enter your password
              {/* <div className={style.passwordWrapper}> */}
              <Field
                id="password"
                className={style.form_input}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                error={touched.password && errors.password ? "true" : "false"}
              />
              <span
                onClick={togglePasswordVisibility}
                // className={style.togglePassword}
              >
                <svg className={style.icon}>
                  <use
                    href={sprite + (showPassword ? "#eye-show" : "#eye-hide")}
                  />
                </svg>
              </span>
              {/* </div> */}
              <ErrorMessage
                className={style.error}
                name="password"
                component="div"
              />
            </label>
            <label className={style.label} htmlFor="newPassword">
              Repeat password
              {/* <div className={style.passwordWrapper}> */}
              <Field
                id="newPassword"
                className={style.form_input}
                type={showPassword ? "text" : "newPassword"}
                name="newPassword"
                placeholder="Repeat password"
                error={touched.password && errors.password ? "true" : "false"}
              />
              <span
                onClick={togglePasswordVisibility}
                // className={style.togglePassword}
              >
                <svg className={style.icon}>
                  <use
                    href={sprite + (showPassword ? "#eye-show" : "#eye-hide")}
                  />
                </svg>
              </span>
              {/* </div> */}
              <ErrorMessage
                className={style.error}
                name="newPassword"
                component="div"
              />
            </label>
            <button className={style.btn} type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <div className={style.bottle}></div>
    </div>
  );
}
