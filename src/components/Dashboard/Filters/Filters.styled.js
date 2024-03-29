import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;

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

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 28px;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: grid;

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
