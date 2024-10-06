import React, { useState } from 'react';
import { CreateTodoProps } from '../../types';

 const CreateTodo: React.FC<CreateTodoProps> = ({ handleCreateTodo }) => {
  const [value, setValue] = useState("");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() !== "") {
      handleCreateTodo(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:border-yellow-400"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default CreateTodo