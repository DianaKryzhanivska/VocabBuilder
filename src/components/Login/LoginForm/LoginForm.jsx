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
import { NavLink } from "react-router-dom";
import sprite from "../../../images/sprite.svg";

const LoginForm = () => {
  return (
    <>
      <Wrapper>
        <Title>Login</Title>
        <Text>
          Please enter your login details to continue using our service:
        </Text>
        <form>
          <InputBox>
            <input type="email" placeholder="Email" />
            <InputWithIcon>
              <input type="password" placeholder="Password" />
              <svg>
                <use href={`${sprite}#eye-off`} />
              </svg>
            </InputWithIcon>
          </InputBox>
          <SubmitBtn type="submit">Login</SubmitBtn>
        </form>
        <RegisterLink>
          <NavLink to="/register">Register</NavLink>
        </RegisterLink>
      </Wrapper>
    </>
  );
};

export default LoginForm;
