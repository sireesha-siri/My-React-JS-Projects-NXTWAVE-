// Write your code here
import './index.css'

const TodoItem = props => {
  // eslint-disable-next-line no-unused-vars
  const {title, id, key, deleteTodo} = props

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p className="title-style">{title}</p>
      <button className="button-style" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
