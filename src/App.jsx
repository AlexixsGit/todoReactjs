
import './App.css';
import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AppUI } from "./AppUI";

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');
  const [isAllCompleted, setAllCompleted] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (todoId, completed) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.id == todoId);
    todos[todoIndex].completed = !completed;
    saveTodos(newTodos);
    allCompleted(todos)
  }

  const deleteTodo = (todoId) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.id == todoId);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const allCompleted = (todos) => {
    setAllCompleted(todos.find(todo => !todo.completed) == undefined);
  }

  return (
    <AppUI searchValue={searchValue} setSearchValue={setSearchValue} 
    isAllCompleted={isAllCompleted} completedTodos={completedTodos} totalTodos={totalTodos}
    completeTodo={completeTodo} deleteTodo={deleteTodo} todos={todos}/>
  )
}

export default App;
