import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// const defaultTodos = [
//   { text: 'tarea uno', completed: true },
//   { text: 'tarea dos', completed: false },
//   { text: 'tarea tres', completed: false },
//   { text: 'tarea CUATRO', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

// function App(defaultTodos) {

function useLocalStorage(itemName, initialValue) { //custom hook
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
  saveTodos(newTodos);
}

const deleteTodoTask = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );

  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
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
