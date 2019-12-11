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
    if (todoText !== "") {
      dispatch({ type: c.ADD_TODO, payload: todoText});
      setTodoText("");
    }
  }

  return (
    <div className="notepad">
      <div className="form">
        <input
          className="todo-name"
          type="text"
          name="newTodoText"
          value={todoText}
          onChange={handleChanges}
        />
        <button
          className="add"
          type="button"
          onClick={saveTodo}
          aria-label="Save"
        >+
        </button>
      </div> {/* form */} 
      <div className="items">
        {todoState.map(todo => ( 
          <div className={`item ${todo.completed ? 'completed' : ''}`}
            key={todo.id} onClick={() => dispatch({type: c.TOGGLE_COMPLETE, payload: todo.id})}
          >
            <span className="check">X</span>
            <span className="text">{todo.item}</span>
          </div> ))
        }
      </div> {/* items */}
      <button className="clear" onClick={() => dispatch({type: c.CLEAR_COMPLETED})}>
          Clear Completed
      </button>
    </div> // container
  );

}

export default TodoList;