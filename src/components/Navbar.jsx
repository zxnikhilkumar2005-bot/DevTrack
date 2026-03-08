import { MoonIcon, PlusIcon, SunIcon } from "./Icons";

function Navbar({ totalTasks, isDarkMode, onToggleTheme, onAddTask }) {
  return (
    <header className="top-navbar">
      <div className="navbar-copy">
        <p className="navbar-eyebrow">Workspace</p>
        <h2>Task Board</h2>
      </div>

      <div className="navbar-actions">
        <div className="tasks-count" aria-label={`Total tasks ${totalTasks}`}>
          <span>{totalTasks}</span>
          <small>Total Tasks</small>
        </div>

        <button
          className="ghost-btn"
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
          <span>{isDarkMode ? "Light" : "Dark"}</span>
        </button>

        <button className="primary-btn" type="button" onClick={onAddTask}>
          <PlusIcon />
          <span>New Task</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
