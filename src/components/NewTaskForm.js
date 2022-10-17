
import React, { useState } from "react";

function NewTaskForm({cats, formHandler}) {
  const renderedOptions = cats.map((cat)=>{
    return(
      <option>{cat}</option>

    )
  })
  return (
    <form 
      onSubmit={formHandler}
    className="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          name="text"
          />
      </label>
      <label>
        Category
        <select 
          name="category">
          {renderedOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
