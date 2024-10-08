import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  loading,
  error,
  completedTodos, 
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodoTask, 
  deleteTodoTask
}) {
  return (
    // <div className="App">
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Error...</p>}
        {(!loading && searchedTodos.length === 0) && <p>crea tu primero TODO</p>}

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
    </>
  );
}

export { AppUI };