import { PRIORITY_RANK } from "./constants";

export function generateTaskId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `task-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function sortTasksByPriority(tasks) {
  return [...tasks].sort(
    (a, b) => PRIORITY_RANK[b.priority] - PRIORITY_RANK[a.priority]
  );
}
