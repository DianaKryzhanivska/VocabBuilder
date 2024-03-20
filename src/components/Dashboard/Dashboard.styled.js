import styled from "styled-components";

export const DeskWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 28px;
  }
`;
