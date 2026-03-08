const defaultProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export function PlusIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M12 5V19" />
      <path d="M5 12H19" />
    </svg>
  );
}

export function EditIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M12 20H21" />
      <path d="M16.5 3.5A2.1 2.1 0 0 1 19.5 6.5L8 18L3 19L4 14L16.5 3.5Z" />
    </svg>
  );
}

export function TrashIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M3 6H21" />
      <path d="M8 6V4H16V6" />
      <path d="M19 6L18 20H6L5 6" />
      <path d="M10 11V17" />
      <path d="M14 11V17" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3A7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2V4" />
      <path d="M12 20V22" />
      <path d="M4.9 4.9L6.3 6.3" />
      <path d="M17.7 17.7L19.1 19.1" />
      <path d="M2 12H4" />
      <path d="M20 12H22" />
      <path d="M4.9 19.1L6.3 17.7" />
      <path d="M17.7 6.3L19.1 4.9" />
    </svg>
  );
}

export function BoardIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3V21" />
      <path d="M15 3V21" />
    </svg>
  );
}

export function ChartIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M3 3V21H21" />
      <path d="M7 14L11 10L14 13L20 7" />
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2V6" />
      <path d="M8 2V6" />
      <path d="M3 10H21" />
    </svg>
  );
}

export function SettingsIcon(props) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15A1 1 0 0 0 19.6 16.1L19.7 16.2A2 2 0 1 1 16.8 19.1L16.7 19A1 1 0 0 0 15.6 18.8A1 1 0 0 0 15 19.7V20A2 2 0 1 1 11 20V19.8A1 1 0 0 0 10.4 18.9A1 1 0 0 0 9.3 19.1L9.2 19.2A2 2 0 1 1 6.3 16.3L6.4 16.2A1 1 0 0 0 6.6 15.1A1 1 0 0 0 5.7 14.5H5.4A2 2 0 1 1 5.4 10.5H5.6A1 1 0 0 0 6.5 9.9A1 1 0 0 0 6.3 8.8L6.2 8.7A2 2 0 1 1 9.1 5.8L9.2 5.9A1 1 0 0 0 10.3 6.1A1 1 0 0 0 10.9 5.2V5A2 2 0 1 1 14.9 5V5.2A1 1 0 0 0 15.5 6.1A1 1 0 0 0 16.6 5.9L16.7 5.8A2 2 0 1 1 19.6 8.7L19.5 8.8A1 1 0 0 0 19.3 9.9A1 1 0 0 0 20.2 10.5H20.5A2 2 0 1 1 20.5 14.5H20.2A1 1 0 0 0 19.4 15Z" />
    </svg>
  );
}
