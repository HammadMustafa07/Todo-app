// 'use client'

// import { useState } from 'react';

// const Todoapp: React.FC = () => {
//   const [tasks, setTasks] = useState<string[]>([]);
//   const [task, setTask] = useState<string>("");

//   const addTask = () => {
//     if (task.trim()) {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   const removeTask = (index: number) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-black p-6 rounded shadow-md w-[500px]">
//         <h1 className="text-2xl font-bold text-green-600 text-center mb-4">To-Do List</h1>
//         <div className="flex">
//           <input
//             type="text"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             className="border p-2 rounded w-full"
//             placeholder="Add a new task"
//           />
//           <button
//             onClick={addTask}
//             className="add-task-btn ml-[40px] bg-black  shadow-xl text-white p-2 rounded"
//           >
//             Add
//           </button>
//         </div>
//         <ul className="mt-4">
//           {tasks.map((t, index) => (
//             <li key={index} className="flex justify-between items-center bg-white p-2 mt-2 rounded">
//               <span>{t}</span>
//               <button
//                 onClick={() => removeTask(index)}
//                 className="bg-red-500 text-white p-1 rounded flex gap-[10px]"
//               >
//                 {/* Remove */}
//                 <i className=" bi bi-trash3"></i>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todoapp;


'use client';

import { useState } from 'react';
import { PlusLg, TrashFill } from 'react-bootstrap-icons';

const Todoapp: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-teal-100 flex items-center justify-center py-16">
      <div className="bg-white p-12 rounded-xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-teal-800 text-center tracking-tight mb-3">
            TaskZen
          </h1>
          <p className="text-sm text-gray-600 text-center">Find your focus and conquer your day.</p>
        </div>
        <div className="flex rounded-md shadow-sm overflow-hidden border border-gray-200">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="block w-full min-w-0 flex-1 rounded-none py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-lg"
            placeholder="Add a new goal..."
          />
          <button
            onClick={addTask}
            className="relative -ml-px inline-flex items-center gap-x-2 rounded-r-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <PlusLg size={20} />
            Add
          </button>
        </div>
        <ul className="mt-12 space-y-5">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white rounded-md shadow-sm py-4 px-5 border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-gray-800 text-lg">{t}</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500 bg-red-50 hover:bg-red-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                >
                  <TrashFill size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && (
          <div className="mt-10 text-center">
            <svg className="mx-auto h-14 w-14 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <p className="mt-3 text-lg text-gray-500">Your task list is clear.</p>
            <p className="text-sm text-gray-500">Ready to add some focus?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todoapp;