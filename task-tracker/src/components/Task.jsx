// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`border rounded-lg p-4 mb-4 ${
        task.completed ? 'bg-green-200' : 'bg-red-100'
      }`}
    >
      <h3 className="text-lg font-semibold flex justify-between items-center">
        {task.title}
        <span
          onClick={() => onToggle(task.id)}
          className={`cursor-pointer px-2 py-1 rounded ${
            task.completed ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {task.completed ? '✔' : '✖'}
        </span>
      </h3>
      <p className="text-sm text-gray-700">{task.description}</p>
      <button
        onClick={() => onDelete(task.id)}
        className="mt-2 text-sm bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
