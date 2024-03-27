import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Content = styled.div`
  position: absolute;
  background: #fff;
  padding: 12px 24px;
  border-radius: 15px;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 50;
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
    fill: #fff;
    stroke: ${({ theme }) => theme.colors.green};
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5em;
  }
`;
