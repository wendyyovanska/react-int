
import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="createTodoButton"
    onClick={
      (event) => {
        console.log('ere')
        console.log(event)
      }
    }
    >+</button>
  )
}

export { CreateTodoButton }