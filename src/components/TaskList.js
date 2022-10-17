import React from "react";
import Task from "./Task";
function TaskList({listedTasks, deleteHandler}) {
    const kSat = listedTasks.map((task)=>{
      return (
        <Task
        key={task.key}
        categories={task.category}
        tasks = {task.text}
        deleteHandler={deleteHandler}
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
