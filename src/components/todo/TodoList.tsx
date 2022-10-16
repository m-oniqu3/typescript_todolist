import React from "react";
import { useAppSelector } from "../../store/hooks";
import { List } from "../../styles/List.styled";

import Todo from "./Todo";

const TodoList = () => {
  const { todoList } = useAppSelector((state) => state.todos);

  return (
    <List>
      {todoList.map((task) => {
        return <Todo key={task.id} task={task} />;
      })}
    </List>
  );
};

export default TodoList;
