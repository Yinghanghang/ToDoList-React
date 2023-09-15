import React, { useState } from "react";
import CustomItem from "./CustomItem";

function CustomApp() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    const newTaskName = event.target.value;
    setTaskName(newTaskName);
  }

  function addTask() {
    setTasks(prevTasks => [...prevTasks, taskName]);
    setTaskName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} type="text" value={taskName} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <CustomItem key={index} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomApp;
