export default {
  namespace: 'todos',
  state: {
    todos: [{id: 1, todo: 'Learn Dva'}, {id: 2, todo: 'Learn TypeScript'}, {id: 3, todo: 'Learn React'}],
    value: ''
  },
  reducers: {
    remove(state, type) {
      let data = state.todos;
      data.splice(type.payload - 1, 1);
      return {...state, todos: data};
    },
    add(state, type) {
      let newItem = {id: state.todos.length + 1, todo: type.payload};
      let data = state.todos;
      data.push(newItem);
      return {...state, todos: data, value: ''};
    },
    change(state, type) {
      return {...state, value: type.payload}
    }
  },
  effects: {
    *removeDely(action, {call, put}) {
      yield call(delay, 20000);
      yield put( {type: 'remove'} );
    }
  },


}

function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}