import React from 'react';
import {connect} from 'dva';
import Count from '../components/Count';


const Counter = ({dispatch, counts}) => {

  function handleAdd() {
    dispatch({
      type: 'counts/add'
    });
  }
  function handleSub() {
    dispatch({
      type: 'counts/sub'
    });
  }

  return (
    <div>
      <Count add={handleAdd} sub={handleSub} counts={counts} />
    </div>
  );
}


export default connect(({counts}) => ({counts}))(Counter);