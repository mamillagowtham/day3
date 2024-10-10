import React from 'react'

const AddToDoList = ({text,handleChange,handleAddTodo}) => {
  return (
    <>
      <input type='text' onChange={handleChange} value={text}/>
      <button  onClick={handleAddTodo}>Add</button>
    </>
  )
}

export default AddToDoList