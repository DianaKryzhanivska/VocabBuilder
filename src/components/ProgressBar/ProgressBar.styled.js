import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrainingProgress = styled.p`
  position: absolute;
  top: 14px;
  right: 18px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
`;
