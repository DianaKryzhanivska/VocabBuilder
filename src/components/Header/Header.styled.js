import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const BurgerBtn = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    stroke: #121417;
  }
`;
