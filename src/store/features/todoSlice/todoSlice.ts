import { createSlice } from "@reduxjs/toolkit";
import type { TodoItem, Todos } from "../../../types/TodoTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Todos = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state: Todos, action: PayloadAction<TodoItem>) {
      state.todoList.unshift(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
