import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import style from './LoginForm.module.css';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import { routes } from 'routes/routes';

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Email must be 3 symbols minimum')
    .max(30, 'Email must be 30 symbols maximum')
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must be 8 symbols minimum')
    .max(64, 'Password must be 64 symbols maximum')
    .required('Password is required!'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailFindId = useId();
  const pswFindId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handlSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        navigate(routes.HOMEPAGE);
      })
      .catch(error => {
        console.log(error);
        toast.error("This didn't work.");
      });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className="{style.container}">
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={UserSchema}
        onSubmit={handlSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className={style.form} autoComplete="off">
            <h2 className={style.title}>Sign In</h2>
            <label className={style.label} htmlFor={emailFindId}>
              Enter your email
              <Field
                id={emailFindId}
                className={style.form_input}
                type="email"
                name="email"
                placeholder="E-mail"
                autoComplete="email"
                error={touched.email && errors.email ? 'true' : 'false'}
              />
              <ErrorMessage
                className={style.error}
                name="email"
                component="div"
              />
            </label>
            <label className={style.label} htmlFor={pswFindId}>
              Enter your password
              {/* <div className={style.passwordWrapper}> */}
              <Field
                id={pswFindId}
                className={style.form_input}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                error={touched.password && errors.password ? 'true' : 'false'}
                autoComplete="new-password"
              />
              <span
                onClick={togglePasswordVisibility}
                // className={style.togglePassword}
              >
                <svg className={style.icon}>
                  <use
                    href={sprite + (showPassword ? '#eye-show' : '#eye-hide')}
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
            <button className={style.btn} type="submit" disabled={isSubmitting}>
              Sign In
            </button>

            <NavLink className={style.link} to={'/signup'}>
              Sign Up
            </NavLink>
            <NavLink className={style.link} to={'/forgot-password'}>
              Forgot your password?
            </NavLink>
          </Form>
        )}
      </Formik>
      <div className={style.bottle}></div>
    </div>
  );
}
