import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;

  & p {
    color: ${({ theme }) => theme.colors.boldGray};
    font-size: 14px;
    font-weight: 500;
  }

  & span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;

    & p {
      font-size: 16px;
      line-height: 1.5em;
    }

    & span {
      line-height: 1.5em;
    }
  }
`;
