import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  height: auto;
  width: 343px;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 48px 16px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.green};
  z-index: 100;

  & svg {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
  }
`;
