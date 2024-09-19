import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import GoogleLoginButton from "../GoogleBtn/GoogleLoginButton";
import {
  SignUpContainer,
  SightUp,
  ErMsg,
  FormBtnStyled,
  BottleImg,
  StyledBtn,
  StyledField,
  StyledForm,
  Styledlabel,
  FormHead,
} from "./RegistrationForm.styled.js";
import sprite from "../../images/sprite.svg";
const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
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

  return (
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
              error={touched.email && errors.email ? "true" : "false"}
            />
            <ErMsg name="email" component="div" />
            <Styledlabel htmlFor="password">
              Enter your password
              <StyledBtn onClick={() => setShowPassword(!showPassword)}>
                <svg>
                  <use
                    href={sprite + (showPassword ? "#eye-show" : "#eye-hide")}
                  ></use>
                </svg>
              </StyledBtn>
            </Styledlabel>
            <StyledField
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              error={touched.password && errors.password ? "true" : "false"}
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
                      sprite + (showRepeatPassword ? "#eye-show" : "#eye-hide")
                    }
                  ></use>
                </svg>
              </StyledBtn>
            </Styledlabel>
            <StyledField
              type={showRepeatPassword ? "text" : "password"}
              name="repeatPassword"
              id="repeatPassword"
              placeholder="Repeat your password"
              error={
                touched.repeatPassword && errors.repeatPassword
                  ? "true"
                  : "false"
              }
              autoComplete="new-password"
            />
            <ErMsg name="repeatPassword" component="div" />
            <FormBtnStyled type="submit" disabled={isSubmitting}>
              Sign Up
            </FormBtnStyled>
            <SightUp onClick={() => navigate("/signin")}>Sign in</SightUp>
            <GoogleLoginButton />
          </StyledForm>
          
        )}
      </Formik>
      <BottleImg />
    </SignUpContainer>
  );
};
export default RegistrationForm;
