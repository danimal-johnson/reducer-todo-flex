import React, { useState, useReducer } from 'react';

import * as c from '../reducers/states.js';
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState("");

  const handleChanges = e => {
    setTodoText(e.target.value);
  }

  const saveTodo = () => {
    dispatch({ type: c.ADD_TODO, payload: todoText});
  }

  return (
    <div className="container">
      <div className="form">
        <input
          className="todo-name"
          type="text"
          name="newTodoText"
          value={todoText}
          onChange={handleChanges}
        />
        <button
          type="button"
          onClick={saveTodo}>Save Todo
        </button>
        <button onClick={() => dispatch({type: c.CLEAR_COMPLETED})}>
          Clear Completed
        </button>
        <button onClick={() => dispatch({type: c.ADD_TODO, payload: 'Sleep'})}>
          Sleep
        </button>
      </div> {/* form */} 
      <div>
        <h2>Your Todo Items</h2>
        {todoState.map(todo => ( 
          <div className={`${todo.completed ? 'completed' : ''}`}
            onClick={() => dispatch({type: c.TOGGLE_COMPLETE, payload: todo.id})}
          >
            {todo.item}
          </div> ))
        }
      </div>
    </div> // container
  );

}



export default TodoList;