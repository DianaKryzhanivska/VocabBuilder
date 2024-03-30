import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17em;
  letter-spacing: -0.48px;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2em;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SelectWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    width: 204px;
  }
`;

export const VerbTypeBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & label {
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    gap: 8px;
    font-size: 12px;
    font-weight: 400;
  }

  & input {
    border: none;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  & input {
    width: 100%;
    padding: 12px 24px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.borderLightGray};
    background: transparent;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
  }

  & label {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 38px;
    & label {
      font-size: 16px;
      line-height: 1.5em;
    }

    & input {
      width: 354px;
      padding: 16px 18px;
      font-weight: 400;
    }
  }

  @media only screen and (min-width: 1440px) {
    gap: 18px;
  }
`;

export const Item = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 32px;
    justify-content: flex-end;
  }
`;

export const LabelBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  & svg {
    width: 28px;
    height: 28px;
  }

  @media only screen and (min-width: 768px) {
    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 63px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  transition: transform(0.2s);

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.green};
  }

  @media only screen and (min-width: 768px) {
    padding: 14px 104px;
    font-size: 18px;
  }
`;

export const CancelBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.borderLightWhite};
  background: transparent;
  padding: 12px 45px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  transition: transform(0.2s);

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (min-width: 768px) {
    padding: 14px 92px;
    font-size: 18px;
  }
`;
