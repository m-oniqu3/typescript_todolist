import React from "react";
import Background from "./components/background/Background";
import Heading from "./components/heading/Heading";
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import Container from "./helpers/Container";
import { GlobalStyles } from "./styles/Global.styled";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Background>
        <Container>
          <Heading />
          <TodoInput />
          <TodoList />
        </Container>
      </Background>
    </div>
  );
};

export default App;
