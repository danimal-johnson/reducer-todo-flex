import * as c from './states.js';

export const initialState = [{
  item: 'Learn about reducers.',
  completed: false,
  id: 3892987589
}];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case c.ADD_TODO:        // Payload = text of todo
      return [...state, {
        item: action.payload,
        completed: false,
        id: Date.now()
      }];

    case c.TOGGLE_COMPLETE:  // Payload = id
      // Make a copy?
      let stateCopy = [...state];
      // Find the right node
      for (let todo of stateCopy) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      }
      return stateCopy;

    case c.CLEAR_COMPLETED:   // No payload
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}