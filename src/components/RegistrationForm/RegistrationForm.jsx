import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import {
  SignUpContainer,
  SightUp,
  ErMsg,
  FormBtnStyled,
  GoogleBtnStyled,
  BottleImg,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
  FormHead,
} from './RegistrationForm.styled.js';
import sprite from '../../images/sprite.svg';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import from react-oauth/google

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    dispatch(
      register({
        email,
        password,
      })
    );
    resetForm();
  };

  const handleGoogleResponse = async (response) => {
    try {
      const { credential } = response;
      const result = await fetch('http://localhost:3000/auth/confirm-oauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: credential }),
      });
      const data = await result.json();
      console.log('Google login successful', data);
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="273678042827-tc7jst83e51r24h8rd5t9vo4duo3k8oa.apps.googleusercontent.com">
      <SignUpContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <StyledForm>
              <FormHead>Sign Up</FormHead>

              <Styledlabel htmlFor="email">Enter your email</Styledlabel>
              <StyledField
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                autoComplete="email"
                error={touched.email && errors.email ? 'true' : 'false'}
              />
              <ErMsg name="email" component="div" />

              <Styledlabel htmlFor="password">
                Enter your password
                <StyledBtn onClick={() => setShowPassword(!showPassword)}>
                  <svg>
                    <use
                      href={sprite + (showPassword ? '#eye-show' : '#eye-hide')}
                    ></use>
                  </svg>
                </StyledBtn>
              </Styledlabel>
              <StyledField
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                error={touched.password && errors.password ? 'true' : 'false'}
                autoComplete="new-password"
              />
              <ErMsg name="password" component="div" />

              <Styledlabel htmlFor="repeatPassword">
                Repeat Password
                <StyledBtn
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                >
                  <svg>
                    <use
                      href={
                        sprite + (showRepeatPassword ? '#eye-show' : '#eye-hide')
                      }
                    ></use>
                  </svg>
                </StyledBtn>
              </Styledlabel>
              <StyledField
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repeat your password"
                error={
                  touched.repeatPassword && errors.repeatPassword
                    ? 'true'
                    : 'false'
                }
                autoComplete="new-password"
              />
              <ErMsg name="repeatPassword" component="div" />

              <FormBtnStyled type="submit" disabled={isSubmitting}>
                Sign Up
              </FormBtnStyled>

              {/* Google Sign-In Button */}
              <GoogleBtnStyled
                type="button"
              >
                <GoogleLogin
                  onSuccess={handleGoogleResponse}
                  onError={handleGoogleResponse} // Handle errors as needed
                  logoAlignment="left"
                  style={{ width: 25, height: 25, marginRight: 10 }}
                >
                  Sign in with Google
                </GoogleLogin>
              </GoogleBtnStyled>

              <SightUp onClick={() => navigate('/signin')}>Sign in</SightUp>
            </StyledForm>
          )}
        </Formik>
        <BottleImg />
      </SignUpContainer>
    </GoogleOAuthProvider>
  );
};

export default RegistrationForm;
