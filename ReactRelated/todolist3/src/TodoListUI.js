import React from 'react'
import 'antd/dist/reset.css';
import { Button, Input, List} from 'antd';

function TodoListUI(props) {

  const {inputValue, handleInputChange, handleSubmit, list, handleDeleteListItem} = props;

  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          placeholder='todo info' 
          style={{width: '300px', marginRight: '10px'}}
          value={inputValue}
          onChange={handleInputChange}
        ></Input>
        <Button type='primary' onClick={handleSubmit}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={()=>handleDeleteListItem(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}


export default TodoListUI;