import './TodoCounter.css';

function TodoCounter({ total, completed, isAllCompleted }) {
  console.log(isAllCompleted);
  return (
    
    <>
      {isAllCompleted ? (
        <h1 className='todoCounter'>
         !CONGRATULATIONS!, You have completed all your TODOS
        </h1>) : (
        <h1 className='todoCounter'>
          You have completed <span >{completed}</span> of <span >{total}</span> TODOS
        </h1>)}
    </>
  );
}

export { TodoCounter };
