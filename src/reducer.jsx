const counter = (state = {number: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        number: state.number + 1
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        number: state.number - 1
      })
    default:
      return state
  }
}

export default counter;
