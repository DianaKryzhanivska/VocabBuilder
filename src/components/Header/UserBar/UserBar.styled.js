import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const UserIcon = styled.div`
  width: 36px;
  height: 36px;
  background: #85aa9f;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 20px;
    height: 20px;
    stroke: #fcfcfcb2;
    opacity: 0.7;
  }

  @media only screen and (min-width: 768px) {
    width: 48px;
    height: 48px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;
