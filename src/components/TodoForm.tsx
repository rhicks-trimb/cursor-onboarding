import { useState } from 'react'
import { ModusWcTextInput } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react'

interface TodoFormProps {
  onAddTodo: (text: string) => void
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: any) => {
    const value = e.detail?.target?.value || ''
    setInputValue(value)
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="todo-form-container" onKeyDown={handleKeyDown}>
      <ModusWcTextInput
        className="todo-form-input"
        placeholder="Add a new todo..."
        value={inputValue}
        onInputChange={handleInputChange}
        aria-label="New todo input"
      />
      <ModusWcButton
        color="primary"
        variant="filled"
        onButtonClick={handleSubmit}
        aria-label="Add todo"
      >
        Add Todo
      </ModusWcButton>
    </div>
  )
}

export default TodoForm

