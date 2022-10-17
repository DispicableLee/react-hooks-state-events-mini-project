import React from "react";

function Task({tasks, categories}) {
  return (
    <div className="task">
      <div className="label">{tasks}</div>
      <div className="text">{categories}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
