import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

import styles from '../routes/IndexPage.css';


const Count = ({add, sub, counts}) => {
  

  const style = {
    margin: '20px',
    padding: '20px'
  };

  return (
    <div style={style}>
      <h3>Counter计数器</h3>
      <p>当前值为： {counts}</p>
      <Button onClick={add} type={'primary'}>+</Button>
      <Button onClick={sub} type={'primary'}>-</Button>
      <ul className={styles.list}>
        <li><a href="#/">返回首页</a></li>
      </ul>
    </div>
  );
}

Count.propTypes = {
  add: PropTypes.func.isRequired,
  sub: PropTypes.func.isRequired,
  counts: PropTypes.number.isRequired
}

export default Count;