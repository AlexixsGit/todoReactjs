import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";

import { TodoItem } from "./TodoItem/TodoItem";
import './App.css'
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parsedItem);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return [item, saveItem];
}

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
    <React.Fragment>
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
  );
}

export default App;
