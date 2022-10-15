import React from "react";
import Container from "../../helpers/Container";
import Moon from "../../assets/icon-moon.svg";
import { StyledHeading } from "../../styles/Heading.styled";

const Heading = () => {
  return (
    <Container>
      <StyledHeading>
        <h1>TODO</h1>

        <figure>
          <img src={Moon} alt="Theme" />
        </figure>
      </StyledHeading>
    </Container>
  );
};

export default Heading;
