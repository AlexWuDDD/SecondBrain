import React, { Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";

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
    return todolist.map((item, index)=>{
      return (
        <TodoItem
          key = {index}
          content = {item}
          index = {index}
          handleItemDelete = {handleListItemDelete}
        />
      )
    })
  }

  // console.log("todolist");
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
