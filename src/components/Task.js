import React from "react";

function Task(props) {

  return (
    <div className="task">
      <div className="label" name="cat">{props.categories}</div>
      <div className="text" name="task">{props.tasks}</div>
      <button 
        className="delete"
        onClick={props.deleteHandler}
        name={props.tasks}
      >X</button>
    </div>
  );
}

export default Task;
