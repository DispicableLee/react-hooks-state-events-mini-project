import React from "react";

function CategoryFilter({categories, categoryHandler}) {
  const renderedButtons = categories.map((cat)=>{
    return(
      <button
        key={cat.key}
        onClick={categoryHandler}
        value={cat}
      >{cat}</button>
    )
  })
//================================== displayed elements ==================================
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderedButtons}
    </div>
  );
}

export default CategoryFilter;
