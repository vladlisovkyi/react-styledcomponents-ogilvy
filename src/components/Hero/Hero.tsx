import React from "react";
import { StyledHero } from "./HeroStyled";
import Container from "../UI/Container";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <img
          src="./assets/images/logotext.svg"
          width={180}
          height={72}
          alt="Ogilvy"
          loading="lazy"
        />
        <h3>Ogilvy</h3>
        <p>10 years · New York</p>
        <p>
          In the beginning, there was one Ogilvy, the company founded by David
          Ogilvy in 1948. Today, there is again one Ogilvy, in 83 countries and
          132 offices. We are one doorway to a creative network, re-founded to
          make brands matter in a complex, noisy, hyper-connected world.
        </p>
        <Button className="mt-40" label="Contact Ogilvy" />
      </Container>
    </StyledHero>
  );
};

export default Hero;
