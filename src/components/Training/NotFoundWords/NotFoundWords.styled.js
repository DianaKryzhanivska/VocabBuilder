import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 75px;
  padding-bottom: 76px;
  background: ${({ theme }) => theme.colors.background};
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 132px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AddWordBtn = styled.button`
  padding: 16px 133px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
`;

export const CancelBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 16px;
  font-weight: 700;
`;
