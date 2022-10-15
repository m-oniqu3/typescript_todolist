import React from "react";
import { useAppSelector } from "../../store/hooks";
import { List } from "../../styles/List.styled";
import Delete from "../../assets/icon-cross.svg";
import Check from "../../assets/icon-check.svg";

const TodoList = () => {
  const { todoList } = useAppSelector((state) => state.todos);

  const tasks = todoList.map((task) => {
    return (
      <li key={task.id}>
        <div className="task">
          <div className="task__content">
            <div className="circle">
              <figure>
                <img src={Check} alt="checkmark" />
              </figure>
            </div>
            <p>{task.todo}</p>
          </div>

          <figure className="delete">
            <img src={Delete} alt="delete icon" />
          </figure>
        </div>
      </li>
    );
  });

  return <List>{tasks}</List>;
};

export default TodoList;
