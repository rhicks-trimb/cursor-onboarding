import { useState } from 'react'
import { ModusWcNavbar } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcThemeSwitcher } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'
import { Todo } from './types/todo'
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (text: string) => {
    if (!text.trim()) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleUpdateTodo = (id: string, newText: string) => {
    if (!newText.trim()) return

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  const navbarVisibility = {
    ai: false,
    apps: false,
    help: false,
    mainMenu: false,
    notifications: false,
    search: false,
    searchInput: false,
    user: false,
  }

  return (
    <>
      <ModusWcNavbar visibility={navbarVisibility}>
        <div slot="center">
          <ModusWcTypography hierarchy="h2" size="lg" weight="semibold">
            Modus Todo
          </ModusWcTypography>
        </div>
        <div slot="end">
          <ModusWcThemeSwitcher aria-label="Toggle theme" />
        </div>
      </ModusWcNavbar>
      <div className="app-container">
        <div className="app-content">
          <ModusWcTypography hierarchy="h1" size="2xl" weight="semibold" className="app-title">
            My Todo List
          </ModusWcTypography>
          <TodoHeader
            completedCount={completedCount}
            totalCount={totalCount}
            progressPercentage={progressPercentage}
          />
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onToggleTodo={handleToggleTodo}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
    </>
  )
}

export default App

