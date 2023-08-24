import "./TodoForm.css"
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoForm() {

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Add your new TODO</label>
            <textarea placeholder="Study english for the exam" value={newTodoValue}
                onChange={onChange}>

            </textarea>
            <div className="todo-form-button-container">
                <button onClick={onCancel} type="button" className="todo-form-button todo-form-button--cancel">Cancel</button>
                <button type="submit"  className="todo-form-button todo-form-button--add">Add</button>
            </div>
        </form>
    )
}