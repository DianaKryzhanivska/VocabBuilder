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
`;

export const Container = styled(CommonContainer)`
  padding-top: 16px;
  padding-bottom: 139px;
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
`;

export const UserNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
