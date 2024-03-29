import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Btn = styled.button`
  background: transparent;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 16px;
    height: 16px;
  }
`;
