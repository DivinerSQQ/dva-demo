import React from 'react';
import {Input} from 'antd';


const TodoAdd = ({add, change, todos}) => {

  return (
    <div>
      <Input style={{width: 300, marginLeft: 150, marginTop: 20}}
        value={todos.value}
        onPressEnter={() => add(todos.value)}
        onChange={change} 
        placeholder={'请输入一个代办项, 按回车键[enter]添加'} />
    </div>
  );
}


export default TodoAdd;