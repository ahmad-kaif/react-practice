import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <Header />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion} />
    </div>
  );
}

export default App;
