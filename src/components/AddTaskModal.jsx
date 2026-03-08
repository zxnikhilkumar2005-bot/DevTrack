import { useEffect, useState } from "react";
import { TASK_PRIORITIES, TASK_STATUSES } from "../utils/constants";

function AddTaskModal({ isOpen, onClose, onSave, taskToEdit }) {
  const isEditMode = Boolean(taskToEdit);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Todo");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // Keep form values in sync so the same modal supports add + edit modes.
    setTitle(taskToEdit?.title ?? "");
    setDescription(taskToEdit?.description ?? "");
    setPriority(taskToEdit?.priority ?? "Medium");
    setStatus(taskToEdit?.status ?? "Todo");
  }, [isOpen, taskToEdit]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onSave({
      title: trimmedTitle,
      description: description.trim(),
      priority,
      status
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-card"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={isEditMode ? "Edit task modal" : "Add task modal"}
      >
        <div className="modal-header">
          <h3>{isEditMode ? "Edit Task" : "Create New Task"}</h3>
          <button className="text-btn" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>

        <form className="task-form" onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Fix API timeout issue"
              required
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Optional context for this task..."
              rows={4}
            />
          </label>

          <div className="form-row">
            <label>
              Priority
              <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                {TASK_PRIORITIES.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Status
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                {TASK_STATUSES.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button className="primary-btn full-width" type="submit">
            {isEditMode ? "Save Changes" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
