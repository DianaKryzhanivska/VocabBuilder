import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  padding-top: 51px;

  @media only screen and (min-width: 768px) {
    width: 581px;
    padding-bottom: 179px;
  }

  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 32px;
    align-items: center;
    padding-top: 191px;
    width: 902px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media only screen and (min-width: 1440px) {
    width: 203px;
    height: 230px;
  }
`;

export const TextBox = styled.div`
  @media only screen and (min-width: 1440px) {
    width: 581px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;
  margin-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 132px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5em;
    margin-bottom: 64px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const AddWordBtn = styled.button`
  padding: 16px 133px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;

  @media only screen and (min-width: 768px) {
    padding: 14px 64px;
    font-size: 18px;
  }
`;

export const CancelBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.boldGray};
  font-size: 16px;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    padding: 14px 71px;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.green};
    font-size: 18px;
    line-height: 1.5em;
  }
`;
