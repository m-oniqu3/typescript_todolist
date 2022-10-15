import React from "react";
import Container from "../../helpers/Container";
import Moon from "../../assets/icon-moon.svg";
import { StyledHeading } from "../../styles/Heading.styled";

const Heading = () => {
  return (
    <StyledHeading>
      <h1>TODO</h1>

      <figure>
        <img src={Moon} alt="Theme" />
      </figure>
    </StyledHeading>
  );
};

export default Heading;
