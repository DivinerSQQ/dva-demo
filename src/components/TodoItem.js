import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

import styles from '../routes/IndexPage.css';

const TodoItem = ({remove, todos}) => {

  let data = todos.todos;
  return (
    <ul style={{marginLeft: 100, marginTop: 10}}>
      {data.map(item => (
        <li key={item.id}>
          {item.todo}
          <Button style={{marginLeft: 20}} onClick={() => remove(item.id)} size={'small'} type={'danger'}>删除</Button>
        </li>
      ))}
      <ul className={styles.list}>
        <li><a href="#/">返回首页</a></li>
      </ul>
    </ul>
  );
}

TodoItem.propTypes = {
  remove: PropTypes.func.isRequired,
  todos: PropTypes.object.isRequired
}

export default TodoItem;