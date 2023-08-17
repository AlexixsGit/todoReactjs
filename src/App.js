import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";

import { TodoItem } from "./TodoItem/TodoItem";
import './App.css'
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";


const defaultTodos = [
  { id: 1, text: "Study english", completed: false },
  { id: 2, text: "Learn react js", completed: false },
  { id: 3, text: "Study english", completed: true },
  { id: 4, text: "Learn react js", completed: true }

];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [isAllCompleted, setAllCompleted] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (todoId, completed) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.id == todoId);
    todos[todoIndex].completed = !completed;
    setTodos(newTodos);
    allCompleted(todos)
  }

  const deleteTodo = (todoId) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.id == todoId);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

   const allCompleted=(todos)=>{
    setAllCompleted(todos.find(todo => !todo.completed) == undefined);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} isAllCompleted={isAllCompleted}/>
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
