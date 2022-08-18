const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      return [...state, payload];
    }
    case 'TOGGLE_TODO': {
      return state.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done;
          todo.wasToggled = true;
        }
        return todo;
      });
    }
    case 'REMOVE_TODO': {
      return state.filter(todo => todo.id !== payload);
    }
    default:
      return state;
  }
};

export default reducer;
