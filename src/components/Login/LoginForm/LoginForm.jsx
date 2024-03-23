import React from "react";
import {
  InputBox,
  InputWithIcon,
  RegisterLink,
  SubmitBtn,
  Text,
  Title,
  Wrapper,
} from "./LoginForm.styled";
import { NavLink, Navigate } from "react-router-dom";
import sprite from "../../../images/sprite.svg";
import { ErrorMessage, Field, Formik } from "formik";
import { loginSchema } from "../../../schemas/yupSchemas";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { signInThunk } from "../../../redux/auth/operations";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/dictionary" />;
  }
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (values) => {
    dispatch(signInThunk(values));
  };
  return (
    <>
      <Wrapper>
        <Title>Login</Title>
        <Text>
          Please enter your login details to continue using our service:
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <InputBox>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <ErrorMessage name="email" component="div" className="error" />
                <InputWithIcon>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <svg onClick={handleTogglePasswordVisibility}>
                    {showPassword ? (
                      <use href={`${sprite}#eye`} />
                    ) : (
                      <use href={`${sprite}#eye-off`} />
                    )}
                  </svg>
                </InputWithIcon>
              </InputBox>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                Login
              </SubmitBtn>
            </form>
          )}
        </Formik>
        <RegisterLink>
          <NavLink to="/register">Register</NavLink>
        </RegisterLink>
      </Wrapper>
    </>
  );
};

export default LoginForm;
