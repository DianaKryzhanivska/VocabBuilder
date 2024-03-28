import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgba(18, 20, 23, 0.2);
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

  @media only screen and (min-width: 768px) {
    width: 628px;
    padding: 48px 64px;
    border-radius: 30px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  top: 16px;
  right: 16px;

  & svg {
    width: 24px;
    height: 24px;
  }

  @media only screen and (min-width: 768px) {
    top: 20px;
    right: 20px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;
