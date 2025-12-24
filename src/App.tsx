import { useState, useEffect } from 'react'
import { ModusWcNavbar } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcSwitch } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'
import { Todo } from './types/todo'
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('modus-theme-config')
    if (savedTheme) {
      try {
        const themeConfig = JSON.parse(savedTheme)
        const isDark = themeConfig.mode === 'dark'
        setIsDarkMode(isDark)
        updateTheme(isDark)
      } catch (e) {
        // Invalid saved theme, use default
        updateTheme(false)
      }
    } else {
      updateTheme(false)
    }
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.className = 'dark'
      html.setAttribute('data-theme', 'modus-modern-dark')
      html.setAttribute('data-mode', 'dark')
    } else {
      html.className = 'light'
      html.setAttribute('data-theme', 'modus-modern-light')
      html.setAttribute('data-mode', 'light')
    }
    // Save to localStorage
    localStorage.setItem(
      'modus-theme-config',
      JSON.stringify({
        theme: dark ? 'modus-modern-dark' : 'modus-modern-light',
        mode: dark ? 'dark' : 'light',
      })
    )
  }

  const handleThemeToggle = (e: any) => {
    const checked = e.detail?.target?.checked ?? false
    setIsDarkMode(checked)
    updateTheme(checked)
  }

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
      <ModusWcNavbar visibility={navbarVisibility} logo-solution="Modus Todo">
        <ModusWcSwitch
          slot="end"
          value={isDarkMode}
          onInputChange={handleThemeToggle}
          aria-label="Toggle dark mode"
        />
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

