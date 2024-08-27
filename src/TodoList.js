import React, { useState } from "react";
import "./TodoList.scss";

function TodoList() {
  const [SingleTask, setSingleTask] = useState("");
  const [allTask, setAllleTask] = useState(["task1", "task2", "task3"]);

  const AddTaskToArray = (event) => {
    event.preventDefault();
    if (SingleTask.trim() !== "") {
      setAllleTask([...allTask, SingleTask]);
      setSingleTask("");
    }
  };
  const DeleteTask = (index) => {
    const updatedTasks = allTask.filter((_, i) => i !== index);
    setAllleTask(updatedTasks);
    
  };

  return (
    <div className="border">
      <h1>TodoList</h1>
      <form onSubmit={AddTaskToArray}>
        <label>
          Enter your task
          <input
            type="text"
            placeholder="text here"
            value={SingleTask}
            onChange={(e) => setSingleTask(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <div>
        {allTask.map((task, index) => (
          <div className="rowTask" key={index}>
            <span>{task}</span>{" "}
            <div>
              <button onClick={()=>DeleteTask(index)}>Delete</button>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
