import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.17em;
  letter-spacing: -0.48px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & label {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
  }

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
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
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
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 63px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
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
`;
