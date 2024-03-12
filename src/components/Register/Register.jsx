import React from "react";
import { Container, ImageBox } from "./Register.styled";
import Logo from "components/Header/Logo/Logo";
import usual from "../../images/mob-illustration@1x.png";
import retina from "../../images/mob-illustration@2x.png";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
  return (
    <>
      <Container>
        <Logo />
        <ImageBox>
          <img
            srcSet={`${usual} 1x, ${retina} 2x`}
            alt="illustration"
            width={247}
            height={191}
          />
        </ImageBox>
      </Container>
      <RegisterForm />
    </>
  );
};

export default Register;
