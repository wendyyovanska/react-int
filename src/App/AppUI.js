import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    // <div className="App">
    <>
      <TodoCounter />
      <TodoSearch />

      {/* render function: TodoContext.Consumer waits a function 
        that would return the components or elements to be shown
      */}
      <TodoContext.Consumer> 
        {({
          loading,
          error,
          searchedTodos,
          completeTodoTask,
          deleteTodoTask
        }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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
        )}

      </TodoContext.Consumer>
      <CreateTodoButton />

      {/*  </div> */}
    </>
  );
}

export { AppUI };