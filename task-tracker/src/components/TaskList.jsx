// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
