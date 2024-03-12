import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 25px 25px 0px 0px;
  padding: 32px 16px 57px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.06em;
  letter-spacing: -0.6px;
  margin-bottom: 16px;
`;

export const Desc = styled.p`
  width: 340px;
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin-bottom: 16px;
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
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: grid;

  & svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18px;
    right: 18px;
    fill: white;
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const SubmitBtn = styled.button`
  background: ${({ theme }) => theme.colors.green};
  padding: 16px 139px;
  border-radius: 30px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
`;
