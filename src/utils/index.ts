import { Todo } from "../types";

  
  export const loadTodosFromStorage = (): Todo[] => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Error loading todos from localStorage:', error);
      return [];
    }
  };
  
  export const saveTodosToStorage = (todos: Todo[]): void => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  };
  
  