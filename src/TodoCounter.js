import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 >
      You have completed <span className='totalLabel'>{completed}</span> of <span className='totalLabel'>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
 