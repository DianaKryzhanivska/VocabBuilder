import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 0; */
  /* right: 0; */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Content = styled.div`
  position: absolute;
  background: white;
  padding: 12px 24px;
  width: 117px;
  height: 70px;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;
`;

export const ActionBtn = styled.button`
  background: transparent;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 500;

  & svg {
    width: 16px;
    height: 16px;
  }
`;
