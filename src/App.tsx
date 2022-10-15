import React from "react";
import Background from "./components/background/Background";
import Heading from "./components/heading/Heading";
import { GlobalStyles } from "./styles/Global.styled";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Background>
        <Heading />
      </Background>
    </div>
  );
};

export default App;
