import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media only screen and (min-width: 1440px) {
    gap: 316px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: 28px;
  }

  @media only screen and (min-width: 1440px) {
    gap: 303px;
  }
`;

export const BurgerBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 32px;
    height: 22px;
    stroke: #121417;
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 40px;
      height: 28px;
    }
  }
`;
