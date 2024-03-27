import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 24px;
  padding-bottom: 76px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  margin-bottom: 116px;
`;

export const InputBox = styled.div`
  position: relative;

  & input {
    padding: 22px;
    width: 343px;
    height: 195px;
    box-sizing: border-box;
    border-radius: 8px 8px 0px 0px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tableBorder};
  }
`;

export const LabelBox = styled.div`
  position: absolute;
  right: 22px;
  bottom: 18px;
  display: flex;
  gap: 8px;
  align-items: center;

  & svg {
    width: 28px;
    height: 28px;
  }

  & label {
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const NextBtn = styled.button`
  position: absolute;
  left: 22px;
  bottom: 19px;
  background: transparent;
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    color: ${({ theme }) => theme.colors.boldGray};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Box = styled.div`
  position: relative;
  padding: 22px;
  width: 343px;
  height: 195px;
  box-sizing: border-box;
  border-radius: 0px 0px 8px 8px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Word = styled.p`
  position: absolute;
  top: 22px;
  left: 22px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  padding: 16px 153px;
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
  text-align: center;
`;
