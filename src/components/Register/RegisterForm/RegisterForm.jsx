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

const RegisterForm = () => {
  return (
    <>
      <Wrapper>
        <Title>Register</Title>
        <Desc>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </Desc>
        <Form>
          <InputBox>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <InputWithIcon>
              <input type="password" placeholder="Password" />
              <svg>
                <use href={`${sprite}#eye-off`} />
              </svg>
            </InputWithIcon>
          </InputBox>
          <SubmitBtn type="submit">Register</SubmitBtn>
        </Form>
        <LoginLink>
          <NavLink to="/login">Login</NavLink>
        </LoginLink>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
