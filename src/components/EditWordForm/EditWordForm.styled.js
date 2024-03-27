import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  & input {
    width: 311px;
    box-sizing: border-box;
    padding: 12px 24px;
    background: transparent;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.borderLightGray};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
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

  & label {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const SubmitBtn = styled.button`
  padding: 12px 60px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
`;

export const CancelBtn = styled.button`
  padding: 12px 45px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.borderLightWhite};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
`;
