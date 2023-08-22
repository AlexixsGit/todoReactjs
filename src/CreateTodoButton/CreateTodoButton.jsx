import { TodoContext } from '../TodoContext/TodoContext';
import './CreateTodoButton.css'
import React from 'react';

export function CreateTodoButton() {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <button className='createTodoButton' onClick={() => {
            setOpenModal(!openModal)
        }}>+</button>
    );
}
