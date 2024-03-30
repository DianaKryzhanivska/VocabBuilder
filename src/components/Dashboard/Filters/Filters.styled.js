import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 28px;
  }
`;

export const VerbTypeBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & label {
    color: ${({ theme }) => theme.colors.black};
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
    & label {
      font-size: 14px;
    }
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: grid;

  & input {
    padding: 12px 24px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;
    background: ${({ theme }) => theme.colors.background};
  }

  & svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 14px;
    right: 24px;
    fill: #fff;
    stroke: ${({ theme }) => theme.colors.black};
  }

  @media only screen and (min-width: 768px) {
    & input {
      width: 274px;
      box-sizing: border-box;
    }
  }
`;
