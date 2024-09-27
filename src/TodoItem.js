import { FaWindowClose, FaCheckSquare } from 'react-icons/fa';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaCheckSquare  />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaWindowClose />
      </span>
    </li>
  );
}

export { TodoItem }