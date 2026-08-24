import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter(function (item, index) {
      return index !== indexToDelete;
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={function (event) {
          setTask(event.target.value);
        }}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(function (item, index) {
          return (
            <li key={index}>
              {item}
              <button onClick={function () {
                deleteTask(index);
              }}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;