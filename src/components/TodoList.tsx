import { ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'
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
      <ModusWcTypography 
        hierarchy="p" 
        className="todo-list-empty"
        style={{ textAlign: 'center', padding: 'var(--modus-wc-spacing-xl)', color: 'var(--modus-wc-color-base-content)' }}
      >
        No todos yet. Add one above to get started!
      </ModusWcTypography>
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

