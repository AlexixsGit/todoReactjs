import React from 'react';
import './TodoItem.css'
import { FaCheck, FaRegCheckCircle  } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure this line is included here



export function TodoItem({ text, completed }) {
  return (
    <li className="list-group-item">
      {completed ? <FaCheck className="green-check" /> : <FaRegCheckCircle className="gray-check" />}
      <p>{text}</p>
      {false ? <AiFillDelete className="delete-button" /> : null}
    </li>
  );
}

