


import React, { useState } from 'react';
import ToDoList from './ToDoList';
import AddToDoList from './AddToDoList';

const ToDo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo ]= useState([]);

    const handleChange = (event)=>{
     setText( event.target.value);
    }

    const handleAddTodo = ()=>{
     const newItem ={
        title :   text,
        status : false,
        id : Date.now() +  Math.random()
     };

    const todoAfterItemAddition = [...todo,newItem];
    setTodo(todoAfterItemAddition);
    setText("");

    };


    function handleToggle(id)
    {
        const todoAfterUpdation = todo.map(()=>{
            item.id === id ? {...item ,  status : !item.status} : item;
        })
        setTodo(todoAfterUpdation) ;
    }

  return  (
    <div>
        <div>
           <ToDoList todo = {todo}/>
           <AddToDoList text={text} handleChange={handleChange}  handleAddTodo={handleAddTodo} />
        </div>
        <ul>
           <ToDoList todo = {todo} handleToggle={handleToggle}/>
           </ul>

    </div>
  )
};

export default ToDo;