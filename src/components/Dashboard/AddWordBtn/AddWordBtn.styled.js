import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Btn = styled.button`
  background: transparent;
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5em;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const TrainingLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5em;

  & a {
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;
