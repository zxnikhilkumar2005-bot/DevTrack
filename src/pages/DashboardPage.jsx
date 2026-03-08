import { useMemo, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskColumn from "../components/TaskColumn";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TASK_STATUSES } from "../utils/constants";
import { generateTaskId } from "../utils/taskUtils";

const initialTasks = [
  {
    id: "task-1",
    title: "Refactor authentication hooks",
    description: "Split auth logic into reusable hooks for cleaner components.",
    priority: "High",
    status: "In Progress"
  },
  {
    id: "task-2",
    title: "Add onboarding checklist",
    description: "Create a first-time user checklist for quick setup.",
    priority: "Medium",
    status: "Todo"
  },
  {
    id: "task-3",
    title: "Improve dashboard performance",
    description: "Memoize expensive lists and remove unnecessary re-renders.",
    priority: "Low",
    status: "Completed"
  }
];

function DashboardPage() {
  const [tasks, setTasks] = useLocalStorage("devtrack-tasks", initialTasks);
  const { isDarkMode, toggleTheme } = useDarkMode();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [draggingOverStatus, setDraggingOverStatus] = useState("");

  const groupedTasks = useMemo(() => {
    return TASK_STATUSES.reduce((accumulator, status) => {
      accumulator[status] = tasks.filter((task) => task.status === status);
      return accumulator;
    }, {});
  }, [tasks]);

  const openAddModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskFormData) => {
    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, ...taskFormData, updatedAt: Date.now() }
            : task
        )
      );
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: generateTaskId(),
          ...taskFormData,
          createdAt: Date.now()
        }
      ]);
    }

    closeModal();
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleDragStart = (event, taskId) => {
    event.dataTransfer.setData("text/plain", taskId);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDropTask = (event, nextStatus) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    setDraggingOverStatus("");

    if (!taskId) {
      return;
    }

    // Updating only the moved task keeps drag-and-drop lightweight and readable.
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus, updatedAt: Date.now() } : task
      )
    );
  };

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Navbar
          totalTasks={tasks.length}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
          onAddTask={openAddModal}
        />

        <div className="board-grid">
          {TASK_STATUSES.map((status) => (
            <TaskColumn
              key={status}
              title={status}
              tasks={groupedTasks[status] || []}
              isDragOver={draggingOverStatus === status}
              onDragOver={(event) => {
                event.preventDefault();
                setDraggingOverStatus(status);
              }}
              onDragLeave={() => setDraggingOverStatus("")}
              onDropTask={(event) => handleDropTask(event, status)}
              onEditTask={openEditModal}
              onDeleteTask={handleDeleteTask}
              onDragStart={handleDragStart}
            />
          ))}
        </div>
      </main>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveTask}
        taskToEdit={editingTask}
      />
    </div>
  );
}

export default DashboardPage;
