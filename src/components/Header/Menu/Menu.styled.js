import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  width: 185px;
  height: auto;
  background: #85aa9f;
  overflow-y: auto;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Container = styled(CommonContainer)`
  padding-top: 16px;
  padding-bottom: 139px;

  @media only screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 214px;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 166px;
`;

export const CloseBtn = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 32px;
    height: 32px;
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;
