import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {selectInputValue, setInputValue, setInputValueAsync} from './store/features/inputValueSlice'
import { selectList, addListItem, deleteListItem, fetchTodolist} from './store/features/listSlice';
import TodoListUI from './TodoListUI';

function TodoList() {
  const inputValue = useSelector(selectInputValue);
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  const handleInputChange = (e)=>{
    console.log(e.target.value)
    // dispatch(setInputValue(e.target.value));
    dispatch(setInputValueAsync(e.target.value));
  }

  const handleSubmit = ()=>{
    dispatch(addListItem(inputValue));
    dispatch(setInputValue(""));
  }

  const handleDeleteListItem = (index)=>{
    dispatch(deleteListItem(index));
  }

  useEffect(()=>{
    let ignore = false;
    dispatch(fetchTodolist(ignore));
    return ()=>{
      ignore = true;
    }
  }, [dispatch])

  return (
    <TodoListUI 
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      list={list}
      handleSubmit={handleSubmit}
      handleDeleteListItem={handleDeleteListItem}

    />
  )
}

export default TodoList;
