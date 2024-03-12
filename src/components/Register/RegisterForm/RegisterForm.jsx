import React from "react";
import {
  Desc,
  InputBox,
  InputWithIcon,
  SubmitBtn,
  Title,
  Wrapper,
} from "./RegisterForm.styled";
import sprite from "../../../images/sprite.svg";

const RegisterForm = () => {
  return (
    <>
      <Wrapper>
        <Title>Register</Title>
        <Desc>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </Desc>
        <form>
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
        </form>
      </Wrapper>
    </>
  );
};

export default RegisterForm;
