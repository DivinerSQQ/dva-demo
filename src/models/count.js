export default {
  namespace: 'counts',
  state: 0,
  reducers: {
    add(state) {
      return ++state;
    },
    sub(state) {
      return --state;
    },
  }
}