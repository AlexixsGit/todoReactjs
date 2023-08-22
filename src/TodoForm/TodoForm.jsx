import "./TodoForm.css"
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoForm() {

    const {
        setOpenModal
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add your new TODO</label>
            <textarea placeholder="Study english for the exam"></textarea>
            <div className="todo-form-button-container">
                <button className="todo-form-button todo-form-button--cancel">Cancel</button>
                <button className="todo-form-button todo-form-button--add">Add</button>
            </div>
        </form>
    )
}