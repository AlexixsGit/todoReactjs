import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";

import { TodoItem } from "./TodoItem";
import './App.css'
import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";


const defaultTodos = [
  { id: 1, text: "Study english", completed: false },
  { id: 2, text: "Learn react js", completed: false },
  { id: 3, text: "Study english", completed: false },
  { id: 4, text: "Learn react js", completed: false },
];

function App() {
  return (
    <div className="container">
      <TodoCounter completed={10} total={20} />
      <TodoSearch />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            ))}
          </TodoList>
        </div>  
      </div>
      
    </div>
  );
}

export default App;
