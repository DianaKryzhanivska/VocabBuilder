import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 32px;
  padding-bottom: 48px;
  background: ${({ theme }) => theme.colors.background};

  @media only screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;
