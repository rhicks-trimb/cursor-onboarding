import { ModusWcCard } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcProgress } from '@trimble-oss/moduswebcomponents-react'
import { ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'

interface TodoHeaderProps {
  completedCount: number
  totalCount: number
  progressPercentage: number
}

const TodoHeader = ({ completedCount, totalCount, progressPercentage }: TodoHeaderProps) => {
  return (
    <div className="todo-header-container">
      <ModusWcCard bordered={false}>
        <ModusWcTypography hierarchy="h2" slot="title">
          Progress
        </ModusWcTypography>
        <ModusWcProgress
          value={progressPercentage}
          max={100}
          label={`${Math.round(progressPercentage)}%`}
          aria-label="Todo completion progress"
        />
        <ModusWcTypography hierarchy="p" size="sm" className="todo-header-stats">
          {completedCount} of {totalCount} todos completed
        </ModusWcTypography>
      </ModusWcCard>
    </div>
  )
}

export default TodoHeader

