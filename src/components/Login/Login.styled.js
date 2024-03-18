import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 16px;
  padding-bottom: 43px;

  @media only screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 106px;
  }
`;

export const Img = styled.img`
  margin: 12px auto 16px;
`;

export const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 14px;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5em;
  }
`;
