import React, { useState, useEffect } from "react";
import { loadTodosFromStorage, saveTodosToStorage } from "../../utils";
import { Todo } from "../../types";
import TodoList from "../TodoList";
import CreateTodo from "../CreateTode";
import { generateGuid } from "../../helper/generateGuid";
import { generateRandomColor } from "../../helper/generateRandomColor";

const TodoHome: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromStorage);

  useEffect(() => {
    saveTodosToStorage(todos);
  }, [todos]);

  const handleCreateTodo = (task: string) => {
    const todoId = generateGuid();
    const todoColor = generateRandomColor();
    console.log(todoColor, "todoColor");
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: todoId,
        task,
        isComplete: false,
        isEditing: false,
        color: todoColor,
      },
    ]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isComplete: !todo.isComplete,
              isEditing: false,
            }
          : todo
      )
    );
  };

  const handleEditTodo = (id: string, newTask: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id && !todo.isComplete
          ? { ...todo, task: newTask, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center">
        Todo List
      </h1>
      <div className="bg-yellow-50 p-6 rounded-xl shadow-lg">
        <CreateTodo handleCreateTodo={handleCreateTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </div>
  );
};

export default TodoHome;
