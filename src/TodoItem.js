import React from 'react';
import './TodoItem.css'


export function TodoItem({ text, completed }) {
  return (<li className="todo-item">
    <button
      className={`check ${completed && "check--active"}`}
    ></button>
    <p className={`todo-item-p ${completed && "todo-item--completed"}`}>{text}</p>
    <button className="close-item"></button>
  </li>
  );
}

