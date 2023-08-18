import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";

import { TodoItem } from "./TodoItem/TodoItem";
import './App.css'
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";


export function AppUI({
    searchValue, setSearchValue, isAllCompleted, completedTodos, totalTodos, completeTodo, deleteTodo, todos
}) {
    return <React.Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos} isAllCompleted={isAllCompleted} />
        <TodoSearch searchValue={searchValue}
            setSearchValue={setSearchValue} />
        <div className="row justify-content-center">
            <div className="col-md-8">
                <TodoList>
                    {todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(todo => (
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
        <CreateTodoButton />
    </React.Fragment>
}
