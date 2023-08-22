import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";

import { TodoItem } from "./TodoItem/TodoItem";
import './App.css'
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import { TodoLoading } from "./TodoLoading/TodoLoading";
import { TodoError } from "./TodoError/TodoError";
import { TodoAddMessage } from "./TodoAddMessage/TodoAddMessage";
import { TodoContext } from "./TodoContext/TodoContext";
import { Modal } from "./Modal/Modal";
import { TodoForm } from "./TodoForm/TodoForm";

export function AppUI() {
    const {
        item,
        loading,
        error,
        searchValue,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);
    return <React.Fragment>
        <div>
            <TodoCounter />
            <TodoSearch />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <TodoList>
                        <TodoLoading loading={loading} />
                        <TodoError error={error} />
                        <TodoAddMessage loading={loading} error={error} item={item} />
                        {item.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(todo => (
                            <TodoItem onDelete={() => {
                                deleteTodo(todo.id);
                            }} onComplete={() => {
                                completeTodo(todo.id, todo.completed)
                            }} key={todo.id} text={todo.text} completed={todo.completed}
                            />
                        ))}
                    </TodoList>
                </div>
            </div>
        </div>
        <CreateTodoButton />

        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
    </React.Fragment>
}
