import React from "react";
import { Container, Img, Text } from "./Login.styled";
import Logo from "components/Header/Logo/Logo";
import usual from "../../images/mob-illustration@1x.png";
import retina from "../../images/mob-illustration@2x.png";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <Container>
        <Logo />
        <Img srcSet={`${usual} 1x, ${retina} 2x`} alt="illustration" />
        <Text>Word · Translation · Grammar · Progress</Text>
      </Container>
      <LoginForm />
    </>
  );
};

export default Login;
