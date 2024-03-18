import React from "react";
import { Container, Img, Text } from "./Login.styled";
import Logo from "components/Header/Logo/Logo";
import usual from "../../images/mob-illustration@1x.png";
import retina from "../../images/mob-illustration@2x.png";
import LoginForm from "./LoginForm/LoginForm";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  return (
    <>
      <Container>
        <Logo />
        {isMobile && (
          <Img srcSet={`${usual} 1x, ${retina} 2x`} alt="illustration" />
        )}
        {isTablet && <LoginForm />}
        <Text>Word · Translation · Grammar · Progress</Text>
      </Container>
      {isMobile && <LoginForm />}
    </>
  );
};

export default Login;
