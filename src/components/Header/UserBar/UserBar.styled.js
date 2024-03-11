import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
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
    stroke: #fcfcfcb2;
    opacity: 0.7;
  }
`;
