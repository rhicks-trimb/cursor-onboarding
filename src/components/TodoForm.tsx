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

  const handleSubmit = (e?: any) => {
    e?.preventDefault?.()
    if (inputValue.trim()) {
      onAddTodo(inputValue)
      setInputValue('')
    }
  }

  const handleButtonClick = (e?: any) => {
    e?.preventDefault?.()
    handleSubmit(e)
  }

  return (
    <form className="todo-form-container" onSubmit={handleSubmit}>
      <ModusWcTextInput
        className="todo-form-input"
        placeholder="Add a new todo..."
        value={inputValue}
        onInputChange={handleInputChange}
        aria-label="New todo input"
      />
      <ModusWcButton
        type="button"
        color="primary"
        variant="filled"
        onButtonClick={handleButtonClick}
        aria-label="Add todo"
      >
        Add Todo
      </ModusWcButton>
    </form>
  )
}

export default TodoForm

