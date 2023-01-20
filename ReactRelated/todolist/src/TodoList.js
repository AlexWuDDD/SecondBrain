import React, { Fragment } from "react";

function TodoList() {

  const [inputValue, setInputvalue] = React.useState("");
  const [todolist, setTodolist] = React.useState(["Learn English", "Learn React"]);

  const handleChange = e =>{
    setInputvalue(e.target.value);
  }

  const handleSubmit = ()=>{
    if(inputValue !== ""){
      setTodolist([...todolist, inputValue])
      setInputvalue("");
    }
  }

  const handleListItemDelete = (index)=>{
    console.log(index);
    setTodolist([...todolist.slice(0, index), ...todolist.slice(index+1)])
  }

  return (
    <Fragment>
      <div>
        <input 
          value={inputValue} 
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>提交</button>
      </div>
      <ul>
        {
          todolist.map((item, index)=>{
            return (
              <li 
                key={index} 
                onClick={()=>handleListItemDelete(index)}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

export default TodoList;
