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

export function AppUI({
    searchValue, setSearchValue, isAllCompleted, completedTodos,
    totalTodos, completeTodo, deleteTodo, item, loading, error
}) {
    return <React.Fragment>
        <div>
            <TodoCounter completed={completedTodos} total={totalTodos} isAllCompleted={isAllCompleted} />
            <TodoSearch searchValue={searchValue}
                setSearchValue={setSearchValue} />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <TodoList>
                        <TodoLoading loading={loading} />
                        <TodoError error={error} />
                        <TodoAddMessage loading={loading} error={error} item={item}/>
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
    </React.Fragment>
}
