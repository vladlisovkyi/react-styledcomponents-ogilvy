import { styled } from "styled-components";

export const StyledHero = styled.section`
  padding-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 520px) {
    padding-top: 80px;
  }

  h3 {
    margin-top: 54px;
    color: var(--text-black-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
  p:first-of-type {
    margin-top: 10px;
  }
  p:not(:first-of-type) {
    margin-top: 15px;
    max-width: 530px;
  }
`;
