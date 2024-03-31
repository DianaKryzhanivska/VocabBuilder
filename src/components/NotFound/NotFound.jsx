import React from "react";
import { Container, NavLinkStyled, Wrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h3>Page Not Found</h3>
          <p>
            You can go to <NavLinkStyled to="/login">login</NavLinkStyled>
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default NotFound;
