import { EditIcon, TrashIcon } from "./Icons";

function TaskCard({ task, onEditTask, onDeleteTask, onDragStart }) {
  return (
    <article
      className={`task-card priority-${task.priority.toLowerCase()}`}
      draggable
      onDragStart={(event) => onDragStart(event, task.id)}
    >
      <div className="task-card-top">
        <span className="priority-pill">{task.priority}</span>
        <div className="task-card-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={() => onEditTask(task)}
            aria-label={`Edit ${task.title}`}
          >
            <EditIcon width={15} height={15} />
          </button>
          <button
            className="icon-btn danger"
            type="button"
            onClick={() => onDeleteTask(task.id)}
            aria-label={`Delete ${task.title}`}
          >
            <TrashIcon width={15} height={15} />
          </button>
        </div>
      </div>

      <h3>{task.title}</h3>
      <p>{task.description || "No description provided."}</p>
    </article>
  );
}

export default TaskCard;
