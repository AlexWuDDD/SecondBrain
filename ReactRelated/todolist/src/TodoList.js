import axios from "axios";
import React, { Fragment, useEffect } from "react";
import './style.css'
import TodoItem from "./TodoItem";

import './mock/mockapi';

function TodoList() {

  const [inputValue, setInputvalue] = React.useState("");
  const [todolist, setTodolist] = React.useState([]);

  const handleChange = (e) =>{
    setInputvalue(e.target.value);
  }

  const handleSubmit = ()=>{
    if(inputValue !== ""){
      setTodolist([...todolist, inputValue])
      setInputvalue("");
    }
  }

  const handleListItemDelete = (index)=>{
    setTodolist([...todolist.slice(0, index), ...todolist.slice(index+1)])
  }
  

  const getTodoItem = ()=>{
    return Array.isArray(todolist)?todolist.map((item, index)=>{
      return (
        <TodoItem
          key = {index}
          content = {item}
          index = {index}
          handleItemDelete = {handleListItemDelete}
        />
      )
    }):[]
  }

  useEffect(()=>{
    let ignore = false;
    const fetchData = async () => {
      try{
        const result = await axios.get('/api/todolist');
        if(!ignore){
          setTodolist(()=>result.data.list);
          console.log(result);
        }
      }
      catch(error){
        console.log(error)
      }
    }

    fetchData();

    return ()=>{
      ignore = true;
    }
  }, [])

  return (
    <Fragment>
      <div>
        <label htmlFor="insertarea">输入内容</label>
        {/* 下面是一个input框 */}
        <input
          id="insertarea"
          className='input' 
          value={inputValue} 
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>提交</button>
      </div>
      <ul>
        { getTodoItem() }
      </ul>
    </Fragment>
  )
}

export default TodoList;
