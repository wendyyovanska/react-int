import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'tarea uno', completed: true },
  { text: 'tarea dos', completed: false },
  { text: 'tarea tres', completed: false },
  { text: 'tarea CUATRO', completed: false },
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

const searchedTodos = todos.filter(
  (todo) => (todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
);

const completeTodoTask  = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );

  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
}

const deleteTodoTask = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );

  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
}

  return (
    // <div className="App">
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodoTask(todo.text)}
            onDelete={() => deleteTodoTask(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {/*  </div> */}
    </React.Fragment>
  );
}


export default App;
