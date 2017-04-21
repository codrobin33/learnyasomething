App creates the store.

Component (Calculator) subscribes to the store.

It pulls what it wants out of the store via mapStateToProps.

It can manipulate the state via actions (increment, decrement)

The reducers listen for actions and based on a action.type might modify the state by creating a new state.

This triggers an update to the store and the cycle starts over.
