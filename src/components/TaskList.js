import React from "react";
import Task from "./Task";
function TaskList({tasks}) {
  console.log(tasks)
    const kSat = tasks.map((task)=>{
      console.log(task.text)
      return (
        <Task
        categories={task.category}
        tasks = {task.text}
        />
      )
    })

  return (
    <div className="tasks">
      {kSat}
    </div>
  );
}

export default TaskList;
