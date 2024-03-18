import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px 16px 57px;
  border-radius: 25px 25px 0px 0px;
  background: ${({ theme }) => theme.colors.lightGreen};
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    margin: 140px auto 172px;
    border-radius: 30px;
    padding: 48px 64px;
    width: 628px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 11px 0 0;
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

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  & input {
    padding: 16px 18px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
  }

  @media only screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: grid;

  & svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 16px;
    right: 16px;
    fill: #fff;
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.green};
  padding: 16px 150px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  margin-bottom: 16px;

  @media only screen and (min-width: 320px) and (max-width: 374px) {
    padding: 16px 120px;
  }

  @media only screen and (min-width: 768px) {
    padding: 16px 228px;
    font-size: 18px;
  }
`;

export const RegisterLink = styled.div`
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  text-decoration: underline;
  text-align: center;
`;
