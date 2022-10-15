import React from "react";
import { useAppSelector } from "../../store/hooks";
import { List } from "../../styles/List.styled";

const TodoList = () => {
  const { todoList } = useAppSelector((state) => state.todos);

  const tasks = todoList.map((task) => {
    return (
      <li key={task.id}>
        <div className="task">
          <div>check</div>
          <p>{task.todo}</p>
          <div>x</div>
        </div>
      </li>
    );
  });

  return <List>{tasks}</List>;
};

export default TodoList;
