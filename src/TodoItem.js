import React from 'react';
import './TodoItem.css'


export function TodoItem({ text, completed }) {
  return (<li className="todo-item">
    <button
      className={`check ${completed && "check--active"}`}
    ></button>
    <p>{text}</p>
    <button className="close-item"></button>
  </li>
  );
}

