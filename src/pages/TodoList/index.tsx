import React, { useState } from "react";
import { Trash2, Edit2, Check, X } from "lucide-react";
import { TodoListProps, Todo } from "../../types";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [editingText, setEditingText] = useState<string>("");

  const handleEditStart = (todo: Todo) => {
    if (todo.isComplete) return;
    setEditingText(todo.task);
  };

  const handleEditSave = (id: string) => {
    onEdit(id, editingText);
    setEditingText("");
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-4 rounded-lg
            bg-white border border-yellow-200 shadow-sm transition-all duration-200`}
        >
          <div className="flex items-center flex-grow gap-3">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => onToggle(todo.id)}
                className="h-4 w-4 text-yellow-500 border-yellow-300 rounded focus:ring-yellow-400 focus:ring-2 cursor-pointer"
              />
            </div>
            {todo.isEditing ? (
              <div className="flex-grow flex gap-2">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-grow p-2 border rounded focus:outline-none focus:border-yellow-400"
                />
                <button
                  onClick={() => handleEditSave(todo.id)}
                  className="p-2 text-green-600 hover:text-green-800"
                >
                  <Check size={20} />
                </button>
                <button
                  onClick={() => onEdit(todo.id, todo.task)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <span
                style={{ color: todo.isComplete ? "gray" : todo.color }}
                className={`flex-grow ${todo.isComplete ? "line-through" : ""}`}
              >
                {todo.task}
              </span>
            )}
          </div>
          {!todo.isEditing && (
            <div className="flex gap-2 ml-4">
              {!todo.isComplete && (
                <button
                  onClick={() => {
                    onEdit(todo.id, todo.task);
                    handleEditStart(todo);
                  }}
                  className="p-2 text-yellow-600 hover:text-yellow-800"
                >
                  <Edit2 size={20} />
                </button>
              )}
              <button
                onClick={() => onDelete(todo.id)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default TodoList;
