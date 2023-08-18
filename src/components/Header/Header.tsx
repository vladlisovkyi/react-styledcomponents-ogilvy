import React from "react";
import { StyledHeader, StyledNav } from "./HeaderStyle";
import Container from "../UI/Container";
import Button from "../UI/Button";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <div className="logo-navigation">
            <a href="#">
              <img
                src="./assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="back-results">
              <img
                src="./assets/images/back_ui.svg"
                alt="back"
                width={20}
                height={20}
              />
              <span>Back to Results</span>
            </a>
          </div>
          <div className="logo-text">
            <a href="#">
              <img
                src="./assets/images/logotext.svg"
                alt=""
                width={75}
                height={30}
              />
            </a>
          </div>
          <div className="buttons-navigation">
            <Button label="Contact Ogilvy" />
            <div className="user">
              <img
                src="./assets/images/user.svg"
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
          </div>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
