import { sortTasksByPriority } from "../utils/taskUtils";
import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,
  isDragOver,
  onDragOver,
  onDragLeave,
  onDropTask,
  onEditTask,
  onDeleteTask,
  onDragStart
}) {
  const orderedTasks = sortTasksByPriority(tasks);

  return (
    <section
      className={`task-column ${isDragOver ? "drag-over" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDropTask}
    >
      <div className="task-column-header">
        <h3>{title}</h3>
        <span>{tasks.length}</span>
      </div>

      <div className="task-list">
        {orderedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onDragStart={onDragStart}
          />
        ))}

        {!orderedTasks.length && (
          <div className="empty-drop-zone">Drop tasks here</div>
        )}
      </div>
    </section>
  );
}

export default TaskColumn;
