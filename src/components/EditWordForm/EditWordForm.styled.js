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

  @media only screen and (max-width: 374px) {
    & input {
      width: 288px;
    }
  }

  @media only screen and (min-width: 768px) {
    gap: 18px;
    margin-top: 16px;

    & input {
      width: 354px;
      padding: 16px 18px;
      font-weight: 400;
    }
  }
`;

export const Item = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 32px;
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

  @media only screen and (min-width: 768px) {
    & svg {
      width: 32px;
      height: 32px;
    }

    & label {
      font-size: 16px;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;

  & button {
    border-radius: 30px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5em;
  }

  @media only screen and (min-width: 768px) {
    gap: 10px;

    & button {
      font-size: 18px;
    }
  }
`;

export const SubmitBtn = styled.button`
  padding: 12px 60px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  transition: transform(0.2s);

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.green};
  }

  @media only screen and (max-width: 374px) {
    padding: 12px 55px;
  }

  @media only screen and (min-width: 768px) {
    padding: 14px 101px;
  }
`;

export const CancelBtn = styled.button`
  padding: 12px 45px;
  border: 1px solid ${({ theme }) => theme.colors.borderLightWhite};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  transition: transform(0.2s);

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  @media only screen and (max-width: 374px) {
    padding: 12px 40px;
  }

  @media only screen and (min-width: 768px) {
    padding: 14px 92px;
  }
`;
