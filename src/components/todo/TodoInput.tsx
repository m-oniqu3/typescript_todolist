import React, { useState } from "react";
import { Form } from "../../styles/Form.styled";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/features/todoSlice/todoSlice";

const TodoInput = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useAppDispatch();

  const taskHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task === "") return;

    const currentTime = new Date().getTime();

    //dispatch action to add todo
    dispatch(addTodo({ id: currentTime, todo: task, completed: false }));
    setTask("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className="circle" />
      <input
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={taskHandler}
      />
    </Form>
  );
};

export default TodoInput;
