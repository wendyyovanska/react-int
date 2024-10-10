import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);

  // state for save the info the user is typing
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">Escribe una nueva tarea</label>
      <textarea
        placeholder="Escribe tu TODO"
        value={newTodoValue}
        onChange={onChange}>
      </textarea>
      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };