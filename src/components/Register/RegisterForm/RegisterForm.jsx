import React from "react";
import {
  Desc,
  Form,
  InputBox,
  InputWithIcon,
  LoginLink,
  SubmitBtn,
  Title,
  Wrapper,
} from "./RegisterForm.styled";
import sprite from "../../../images/sprite.svg";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { registerSchema } from "../../../schemas/yupSchemas";

const RegisterForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Wrapper>
        <Title>Register</Title>
        <Desc>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </Desc>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registerSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <InputBox>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <InputWithIcon>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <svg>
                    <use href={`${sprite}#eye-off`} />
                  </svg>
                </InputWithIcon>
              </InputBox>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                Register
              </SubmitBtn>
            </Form>
          )}
        </Formik>
        <LoginLink>
          <NavLink to="/login">Login</NavLink>
        </LoginLink>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
