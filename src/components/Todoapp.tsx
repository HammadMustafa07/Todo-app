'use client'

import { useState } from 'react';

const Todoapp: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-black p-6 rounded shadow-md w-[500px]">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-4">To-Do List</h1>
        <div className="flex">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="add-task-btn ml-[40px] bg-black  shadow-xl text-white p-2 rounded"
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-2 mt-2 rounded">
              <span>{t}</span>
              <button
                onClick={() => removeTask(index)}
                className="bg-red-500 text-white p-1 rounded flex gap-[10px]"
              >
                {/* Remove */}
                <i className=" bi bi-trash3"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todoapp;
