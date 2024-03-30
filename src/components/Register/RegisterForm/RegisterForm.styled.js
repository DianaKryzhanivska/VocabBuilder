import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 25px 25px 0px 0px;
  padding: 32px 16px 57px;

  @media only screen and (min-width: 768px) {
    border-radius: 30px;
    padding: 48px 64px;
    width: 500px;
    margin: 140px auto 98px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.06em;
  letter-spacing: -0.6px;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2em;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }
`;

export const Desc = styled.p`
  width: 340px;
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    width: 500px;
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const Form = styled.form`
  width: 343px;

  @media only screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  & input {
    padding: 16px 18px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
    border-radius: 15px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }

  @media only screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: grid;

  & svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 16px;
    right: 16px;
    fill: #fff;
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.green};
  padding: 16px 139px;
  border-radius: 30px;
  width: 100%;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.hover};
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LoginLink = styled.div`
  background: transparent;
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.black};
  }
`;
