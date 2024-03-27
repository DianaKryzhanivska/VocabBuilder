import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 24px;
  padding-bottom: 76px;
  background: ${({ theme }) => theme.colors.background};

  @media only screen and (min-width: 768px) {
    padding-top: 62px;
    padding-bottom: 104px;
  }
`;

export const FormWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    padding: 18px;
    background: #fff;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 116px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
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
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.tableBorder};
  }

  @media only screen and (min-width: 768px) {
    & input {
      width: 668px;
      height: 282px;
    }
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

  @media only screen and (min-width: 768px) {
    bottom: 228px;

    & svg {
      width: 32px;
      height: 32px;
    }

    & label {
      font-size: 16px;
      line-height: 1.5em;
    }
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

  @media only screen and (min-width: 768px) {
    width: 668px;
    height: 282px;
  }
`;

export const Word = styled.p`
  position: absolute;
  top: 22px;
  left: 22px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
  }
`;

export const SubmitBtn = styled.button`
  padding: 16px 153px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;

  @media only screen and (min-width: 768px) {
    padding: 14px 80px;
    font-size: 18px;
  }
`;

export const CancelBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 16px;
  font-weight: 700;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 14px 71px;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.green};
    line-height: 1.5em;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.green};
  }
`;
