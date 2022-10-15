export type TodoStatus = "active" | "completed";
export interface TodoItem {
  id: number | null;
  todo: String;
  status: TodoStatus;
}
export interface Todos {
  todoList: TodoItem[];
}
