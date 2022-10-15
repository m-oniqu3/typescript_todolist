import React from "react";
import LightBackground from "../../assets/bg-mobile-light.jpg";
import { BackgroundWrapper } from "../../styles/Background.styled";

interface Props {
  children: React.ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <BackgroundWrapper backgroundImage={LightBackground}>
      {children}
    </BackgroundWrapper>
  );
};

export default Background;
