import React from "react";
import { Form } from "../../styles/Form.styled";

const TodoInput = () => {
  return (
    <Form>
      <div className="circle"></div>
      <input type="text" placeholder="Create a new todo..." />
    </Form>
  );
};

export default TodoInput;
