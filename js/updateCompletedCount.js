import { b } from './index.js';

export function updateCompletedCount() {
  const completedTasks = document.querySelectorAll(".list-task.checked");
  b.innerHTML = "Completed: " + completedTasks.length;
}
