import {
  BoardIcon,
  CalendarIcon,
  ChartIcon,
  SettingsIcon
} from "./Icons";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BoardIcon, active: true },
  { id: "analytics", label: "Analytics", icon: ChartIcon, active: false },
  { id: "schedule", label: "Schedule", icon: CalendarIcon, active: false },
  { id: "settings", label: "Settings", icon: SettingsIcon, active: false }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-badge">DT</div>
        <div>
          <h1>DevTrack</h1>
          <p>Developer Productivity</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${item.active ? "active" : ""}`}
              type="button"
            >
              <Icon width={16} height={16} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
