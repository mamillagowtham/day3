import React from 'react'

const ToDoList = ({todo,handleToggle}) => {

   
  return (
<>
    {todo.map((item)=>{
        return (
           <li key={item.id}>{item.title} - {item.status ? "completed" : "not completed"}
           <button onClick={()=>
            {
                handleToggle(id)
            }
           }>Toggle</button></li>

        );
    })}
    </>
  )
}

export default ToDoList