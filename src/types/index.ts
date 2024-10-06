export interface Todo {
    id: string;
    task: string;
    isComplete: boolean;
    isEditing: boolean;
  }
  
  export interface CreateTodoProps {
    handleCreateTodo: (task: string) => void;
  }
  
  export interface TodoListProps {
    todos: Todo[];
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
    onEdit: (id: string, newTask: string) => void;
  }