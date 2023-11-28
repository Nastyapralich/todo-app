import { a } from './index.js';

export function updateAllCount() {
  const allTasks = document.querySelectorAll(".list-task");
  a.innerText = "All: " + allTasks.length;
}
