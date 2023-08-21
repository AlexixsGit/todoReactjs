import './TodoCounter.css';

import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  return (
    <TodoContext.Consumer>
      {({ totalTodos, completedTodos, isAllCompleted }) => {
        console.log(isAllCompleted);
        return (
          <>
            {isAllCompleted ? (
              <h1 className='todoCounter'>
                <span >!CONGRATULATIONS!,</span> You have completed all your TODOS
              </h1>) : (
              <h1 className='todoCounter'>
                You have completed <span >{completedTodos}</span> of <span >{totalTodos}</span> TODOS
              </h1>)}
          </>
        );
      }}
    </TodoContext.Consumer>
  );
}

export { TodoCounter };
