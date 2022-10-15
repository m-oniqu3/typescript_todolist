import React, { FC } from "react";
import { StyledContainer } from "../styles/StyledContainer.styled";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
