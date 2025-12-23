import { Todo } from '../types/todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onToggleTodo: (id: string) => void
  onUpdateTodo: (id: string, text: string) => void
  onDeleteTodo: (id: string) => void
}

const TodoList = ({ todos, onToggleTodo, onUpdateTodo, onDeleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
        No todos yet. Add one above to get started!
      </div>
    )
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onUpdate={onUpdateTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList

