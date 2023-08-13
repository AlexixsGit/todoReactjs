import React from 'react';
import './TodoItem.css'
import { FaCheck, FaRegCheckCircle  } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this line is included here

export function TodoItem({ text, completed }) {
  return (
    <li className="todoItem">
      <span className='Icon Icon-check Icon-check--active'>V</span>
      <p className='TodoItem-p TodoItem-p--complete'>{text}</p>
      <span className='Icon Icon-delete'>X</span>
    </li>
  );
}

