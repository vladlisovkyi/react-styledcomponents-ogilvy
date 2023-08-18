import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const StyledNav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .logo-navigation {
    display: flex;
    gap: 1.5rem;

    & .back-results {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      font-size: 14px;
      font-weight: 500;

      & > img {
        transition: all 250ms ease-out;
      }
      &:hover {
        & > img {
          transform: translateX(0.15rem);
        }
      }
    }

    @media screen and (max-width: 580px) {
      & .back-results {
        display: none;
      }
    }
  }

  @media screen and (max-width: 580px) {
    .logo-text {
      display: none;
    }
  }

  & > .buttons-navigation {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & .user {
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      cursor: pointer;
    }

    @media screen and (max-width: 520px) {
      gap: 1rem;
    }
  }
`;
