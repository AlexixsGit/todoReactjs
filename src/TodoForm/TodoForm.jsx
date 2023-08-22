import "./TodoForm.css"

export function TodoForm() {
    return (
        <form>
            <label>Add your new TODO</label>
            <textarea placeholder="Study english for the exam"></textarea>
            <div className="todo-form-button-container">
                <button className="todo-form-button todo-form-button--cancel">Cancel</button>
                <button className="todo-form-button todo-form-button--add">Add</button>
            </div>
        </form>
    )
}