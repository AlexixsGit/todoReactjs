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

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (todoId, completed) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id == todoId);
    console.log("Todo index "+todoIndex)
    newTodos[todoIndex].completed = !completed;
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <TodoList>
            {todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(todo => (
              <TodoItem onComplete={()=>{
                completeTodo(todo.id, todo.completed)
              }} key={todo.id} text={todo.text} completed={todo.completed} />
            ))}
          </TodoList>
        </div>
      </div>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
