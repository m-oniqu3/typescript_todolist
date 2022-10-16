export interface TodoItem {
  id: number;
  todo: String;
  completed: boolean;
}
export interface Todos {
  todoList: TodoItem[];
}
