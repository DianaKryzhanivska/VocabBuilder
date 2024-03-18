import React from "react";
import { Container, Img, ImgBox, Text, Wrapper } from "./Login.styled";
import Logo from "components/Header/Logo/Logo";
import usual from "../../images/mob-illustration@1x.png";
import retina from "../../images/mob-illustration@2x.png";
import usualDesk from "../../images/desk-illustration@1x.png";
import retinaDesk from "../../images/desk-illustration@2x.png";
import LoginForm from "./LoginForm/LoginForm";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <>
      <Container>
        <Logo />
        {isMobile && (
          <Img srcSet={`${usual} 1x, ${retina} 2x`} alt="illustration" />
        )}
        {isTablet && <LoginForm />}
        {(isMobile || isTablet) && (
          <Text>Word · Translation · Grammar · Progress</Text>
        )}
        {isDesktop && (
          <Wrapper>
            <LoginForm />
            <ImgBox>
              <img
                srcSet={`${usualDesk} 1x, ${retinaDesk} 2x`}
                alt="illustration"
              />
              <Text>Word · Translation · Grammar · Progress</Text>
            </ImgBox>
          </Wrapper>
        )}
      </Container>
      {isMobile && <LoginForm />}
    </>
  );
};

export default Login;
