// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 rounded-lg shadow-md mb-6"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-32 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
