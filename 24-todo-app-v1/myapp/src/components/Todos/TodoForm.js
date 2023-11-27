import { useState } from 'react'
import styles from './TodoForm.module.css'
function TodoForm({ addTodo }) {
    const [text, setText] = useState('')

    function onSumbitHandler(event) {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <div className={styles.todoFormContainer}>
        <form onSubmit={onSumbitHandler}>
            <input 
            placeholder="Enter new todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="sumbit">Sumbit</button>
        </form>
        </div>
    )
}
export default TodoForm