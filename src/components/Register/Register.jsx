import React from "react";
import { Container, ImageBox, Text, Wrapper } from "./Register.styled";
import Logo from "components/Header/Logo/Logo";
import usual from "../../images/mob-illustration@1x.png";
import retina from "../../images/mob-illustration@2x.png";
import usualDesk from "../../images/desk-illustration@1x.png";
import retinaDesk from "../../images/desk-illustration@2x.png";
import RegisterForm from "./RegisterForm/RegisterForm";
import { useMediaQuery } from "react-responsive";

const Register = () => {
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
          <ImageBox>
            <img
              srcSet={`${usual} 1x, ${retina} 2x`}
              alt="illustration"
              width={247}
              height={191}
            />
          </ImageBox>
        )}
        {isTablet && <RegisterForm />}
        {isDesktop && (
          <Wrapper>
            <RegisterForm />
            <div>
              <img
                srcSet={`${usualDesk} 1x, ${retinaDesk} 2x`}
                alt="illustration"
                width={498}
                height={435}
                style={{ marginBottom: "16px" }}
              />
              <Text>Word · Translation · Grammar · Progress</Text>
            </div>
          </Wrapper>
        )}
        {isTablet && <Text>Word · Translation · Grammar · Progress</Text>}
      </Container>
      {isMobile && <RegisterForm />}
    </>
  );
};

export default Register;
