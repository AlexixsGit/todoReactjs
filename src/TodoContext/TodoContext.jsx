import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const { item, saveItem, loading, error } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('');
    const [isAllCompleted, setAllCompleted] = React.useState(false);

    const completedTodos = item.filter(todo => !!todo.completed).length;
    const totalTodos = item.length;

    const completeTodo = (todoId, completed) => {
        const newTodos = [...item];
        const todoIndex = item.findIndex((todo) => todo.id === todoId);
        item[todoIndex].completed = !completed;
        saveItem(newTodos);
        allCompleted(item)
    }

    const deleteTodo = (todoId) => {
        const newTodos = [...item];
        const todoIndex = item.findIndex((todo) => todo.id === todoId);
        newTodos.splice(todoIndex, 1);
        saveItem(newTodos);
    }

    const allCompleted = (item) => {
        setAllCompleted(item.find(todo => !todo.completed) === undefined);
    }

    const value = {
        item,
        saveItem,
        loading,
        error,
        searchValue,
        setSearchValue,
        isAllCompleted,
        setAllCompleted,
        completedTodos,
        totalTodos,
        completeTodo,
        deleteTodo,
        allCompleted
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );

}
export { TodoContext, TodoProvider }