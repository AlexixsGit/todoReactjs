import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='todoCounter'>
      You have completed <span >{completed}</span> of <span >{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
