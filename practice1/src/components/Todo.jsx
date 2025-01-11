import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);

  const addTask = () => {
    setTask([...tasks, input]);
    setInput("");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-10 ">
        <input
          className="border w-96 h-10 p-2"
          type="text"
          placeholder="type here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="border h-10 w-24 hover:bg-slate-200"
          onClick={addTask}
        >
          Add Task
        </button>
        <button
          className="border h-10 w-24 hover:bg-slate-500"
          onClick={()=> setTask([])}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ul className=" mt-5 w-64">
          {tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
