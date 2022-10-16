import React from "react";
import { completeTodo } from "../../store/features/todoSlice/todoSlice";
import type { TodoItem } from "../../types/TodoTypes";
import Delete from "../../assets/icon-cross.svg";
import Check from "../../assets/icon-check.svg";
import { useAppDispatch } from "../../store/hooks";
import { ListItem } from "../../styles/ListItem.styled";

interface Props {
  task: TodoItem;
}

const Todo = ({ task }: Props) => {
  const dispatch = useAppDispatch();

  const handleComplete = (id: number) => dispatch(completeTodo(id));
  return (
    <ListItem completed={task.completed} key={task.id}>
      <div className="task">
        <div onClick={() => handleComplete(task.id)} className="task__content">
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
    </ListItem>
  );
};

export default Todo;
