import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1 className='TodoCounter'>
      You completed <span>{completedTodos}</span> from <span>{totalTodos}</span> ToDos
    </h1>
  );
}

export { TodoCounter }