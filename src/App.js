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
  { id: 4, text: "Learn react js", completed: false }

];

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
      <TodoCounter completed={10} total={20} />
      <TodoSearch searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
            ))}
          </TodoList>
        </div>
      </div>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
