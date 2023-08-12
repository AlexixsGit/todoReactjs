import './TodoList.css'

function TodoList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  )
}

export { TodoList };
