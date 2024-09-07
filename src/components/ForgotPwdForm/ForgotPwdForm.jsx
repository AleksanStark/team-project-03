import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { resetPwdEmail } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import style from './ForgotPwdForm.module.css';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const ForgotPwdSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Email must be 3 symbols minimum')
    .max(30, 'Email must be 30 symbols maximum')
    .email('Invalid email address')
    .required('Email is required!'),
});

export default function ForgotPwdForm() {
  const dispatch = useDispatch();

  const handlSubmit = async (values, actions) => {
    try {
      await dispatch(resetPwdEmail(values.email)).unwrap();
      toast.success('Please check your email for reset instructions.');
      actions.resetForm();
    } catch (error) {
      toast.error('Error sending reset instructions. Please try again.');
    }
    actions.setSubmitting(false);
  };

  return (
    <div className={style.container}>
      {/* <h2 className={style.title}>Forgot Your Password?</h2>
      <p className={style.description}>
        Enter your email address and we will send you instructions to reset your
        password.
      </p> */}
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPwdSchema}
        onSubmit={handlSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.form} autoComplete="off">
            <h2 className={style.title}>Forgot Your Password?</h2>
            <label className={style.label} htmlFor="email">
              Enter your email
              <Field
                id="email"
                className={style.form_input}
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                className={style.error}
                name="email"
                component="div"
              />
            </label>

            <button className={style.btn} type="submit" disabled={isSubmitting}>
              Send
            </button>

            <NavLink className={style.link} to={'/signup'}>
              Sign Up
            </NavLink>
            <NavLink className={style.link} to={'/signin'}>
              Sign In
            </NavLink>
          </Form>
        )}
      </Formik>
      <div className={style.bottle}></div>
    </div>
  );
}
