import { ModusWcCard } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcProgress } from '@trimble-oss/moduswebcomponents-react'

interface TodoHeaderProps {
  completedCount: number
  totalCount: number
  progressPercentage: number
}

const TodoHeader = ({ completedCount, totalCount, progressPercentage }: TodoHeaderProps) => {
  return (
    <div className="todo-header-container">
      <ModusWcCard>
        <span slot="title">Progress</span>
        <ModusWcProgress
          value={progressPercentage}
          max={100}
          label={`${Math.round(progressPercentage)}%`}
          aria-label="Todo completion progress"
        />
        <div className="todo-header-stats">
          {completedCount} of {totalCount} todos completed
        </div>
      </ModusWcCard>
    </div>
  )
}

export default TodoHeader

