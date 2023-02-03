import React from 'react'
import 'antd/dist/reset.css';
import { Button, Input, List} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {selectInputValue} from './store/features/inputValueSlice'
import { selectList } from './store/features/listSlice';

function TodoList() {
  const inputValue = useSelector(selectInputValue);
  const list = useSelector(selectList);

  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          placeholder='todo info' 
          style={{width: '300px', marginRight: '10px'}}
          value={inputValue}
        ></Input>
        <Button type='primary'>提交</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />
    </div>

  )
}

export default TodoList;
