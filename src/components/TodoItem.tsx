import { useState } from 'react'
import { Todo } from '../types/todo'
import { ModusWcCard } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcCheckbox } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcTextInput } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onUpdate: (id: string, text: string) => void
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, onToggle, onUpdate, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)

  const handleCheckboxChange = (e: any) => {
    const checked = e.detail?.target?.checked ?? false
    if (checked !== todo.completed) {
      onToggle(todo.id)
    }
  }

  const handleEditClick = (e?: any) => {
    setIsEditing(true)
    setEditValue(todo.text)
  }

  const handleEditInputChange = (e: any) => {
    const value = e.detail?.target?.value || ''
    setEditValue(value)
  }

  const handleSaveEdit = (e?: any) => {
    e?.preventDefault?.()
    if (editValue.trim()) {
      onUpdate(todo.id, editValue)
      setIsEditing(false)
    }
  }

  const handleCancelEdit = (e?: any) => {
    e?.preventDefault?.()
    setIsEditing(false)
    setEditValue(todo.text)
  }

  const handleDelete = (e?: any) => {
    e?.preventDefault?.()
    onDelete(todo.id)
  }

  const handleEditFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSaveEdit()
  }

  return (
    <ModusWcCard className="todo-item-card" bordered={false}>
      <div className="todo-item-content">
        <ModusWcCheckbox
          className="todo-item-checkbox"
          value={todo.completed}
          onInputChange={handleCheckboxChange}
          aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        {isEditing ? (
          <form className="todo-item-edit-form" onSubmit={handleEditFormSubmit}>
            <ModusWcTextInput
              className="todo-item-edit-input"
              value={editValue}
              onInputChange={handleEditInputChange}
              aria-label="Edit todo text"
            />
            <div className="todo-item-actions">
              <ModusWcButton
                type="submit"
                color="tertiary"
                variant="outlined"
                size="sm"
                onButtonClick={handleSaveEdit}
                aria-label="Save edit"
              >
                Save
              </ModusWcButton>
              <ModusWcButton
                type="button"
                color="tertiary"
                variant="outlined"
                size="sm"
                onButtonClick={handleCancelEdit}
                aria-label="Cancel edit"
              >
                Cancel
              </ModusWcButton>
            </div>
          </form>
        ) : (
          <>
            <div 
              className={`todo-item-text ${todo.completed ? 'completed' : ''}`}
              onClick={handleEditClick}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleEditClick()
                }
              }}
              aria-label={`Todo: ${todo.text}. Press Enter or Space to edit.`}
            >
              <ModusWcTypography hierarchy="p">
                {todo.text}
              </ModusWcTypography>
            </div>
            <div className="todo-item-actions">
              <ModusWcButton
                color="tertiary"
                variant="outlined"
                size="sm"
                onButtonClick={handleEditClick}
                aria-label={`Edit "${todo.text}"`}
              >
                Edit
              </ModusWcButton>
              <ModusWcButton
                color="tertiary"
                variant="outlined"
                size="sm"
                onButtonClick={handleDelete}
                aria-label={`Delete "${todo.text}"`}
              >
                Delete
              </ModusWcButton>
            </div>
          </>
        )}
      </div>
    </ModusWcCard>
  )
}

export default TodoItem

