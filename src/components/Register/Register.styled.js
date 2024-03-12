import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 16px;

  @media only screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 106px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  margin: 64px auto 80px;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightBlack};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
`;
