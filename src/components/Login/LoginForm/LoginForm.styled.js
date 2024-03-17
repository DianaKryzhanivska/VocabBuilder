import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px 16px 57px;
  border-radius: 25px 25px 0px 0px;
  background: ${({ theme }) => theme.colors.lightGreen};
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.06em;
  letter-spacing: -0.6px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 32px;

  & input {
    padding: 16px 18px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
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
  background: ${({ theme }) => theme.colors.green};
  padding: 16px 150px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  margin-bottom: 16px;
`;

export const RegisterLink = styled.div`
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  text-decoration: underline;
  text-align: center;
`;