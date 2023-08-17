import React from 'react';
import './TodoItem.css'


export function TodoItem({ text, completed, onComplete, onDelete }) {
  return (<li className="todo-item">
    <button value={completed} onClick={onComplete}
      className={`check ${completed && "check--active"}`}
    ></button>
    <p className={`todo-item-p ${completed && "todo-item--completed"}`}>{text}</p>
    <button className="close-item" onClick={onDelete}></button>
  </li>
  );
}

