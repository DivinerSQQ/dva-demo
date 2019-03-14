import React from 'react';
import {connect} from 'dva';
import TodoItem from '../components/TodoItem';
import TodoAdd from '../components/TodoAdd';


const TodoList = ({dispatch, todos}) => {

  const handleRemove = (id) => {
    dispatch({
      type: 'todos/remove',
      payload: id
    });
  }

  const handleAdd = (value) => {
    dispatch({
      type: 'todos/add',
      payload: value
    });
  }

  const handleChange = (e) => {
    dispatch({
      type: 'todos/change',
      payload: e.target.value
    });
  }

  return (
    <div>
      <TodoAdd add={handleAdd} change={handleChange} todos={todos} />
      <TodoItem remove={handleRemove} todos={todos} />
    </div>
  );
}


export default connect(({todos}) => ({todos}))(TodoList);