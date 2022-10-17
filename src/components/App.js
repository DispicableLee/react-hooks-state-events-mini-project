import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");

function App() {
  //================================ form handling ====================================
  const [formCat, setFormCat] = useState("")
  const [formTask, setFormTask] = useState("")
  //================================== task handling ============================
  const [listedTasks, setListedTasks] = useState(TASKS)



//=========================== formHandler ================================
  function formHandler(e){
    e.preventDefault()
    console.log("handling form")
    //============== set task object variables =====================
    setFormTask(e.target["text"].value)
    setFormCat(e.target.category.value)
    let newTask = {
      text: formTask,
      category: formCat
    }
    setListedTasks([...listedTasks, newTask])
  }

  //========================= deleteHandler =====================
  function deleteHandler(e){
    console.log(e.target.name)
    let deleted = e.target.name
    setListedTasks(listedTasks.filter(obj => obj.text !== deleted))
  }
  console.log(listedTasks)

//========================== categoryHandler =====================================
  function categoryHandler(e){
    e.preventDefault()
    let deleted = e.target.value
    if(deleted === "All"){
      setListedTasks(TASKS)
    }else{
      setListedTasks(TASKS.filter(obj=> obj.category == deleted))
    }
  }


  //==================================================================================
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        categoryHandler={categoryHandler}
      />
      <NewTaskForm 
        cats={CATEGORIES}
        formHandler={formHandler}
      />
      <TaskList 
        listedTasks = {listedTasks}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
