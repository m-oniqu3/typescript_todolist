export interface TodoItem {
  id: number | null;
  todo: String;
  status: TodoStatus;
}

export interface Todos {
  todoList: TodoItem[];
}

interface AddTodoAction {
  payload: TodoItem;
}

export type TodoStatus = "active" | "completed";

export type Action = AddTodoAction;
